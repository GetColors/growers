FROM node:10-alpine AS build

RUN mkdir -p /growers
WORKDIR /growers
COPY package.json /growers

RUN npm install

COPY . /growers

EXPOSE 3000

RUN npm run build

FROM nginx:1.14-alpine

COPY --from=build /growers/dist/ /usr/share/nginx/html

COPY ./www/nxinx.config /etc/nginx/conf.d/default.conf