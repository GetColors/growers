import VueRouter from 'vue-router';

import PageNotFound from '../views/page-not-found/PageNotFound.vue';
import HomePage from '../views/home/HomePage.vue';

const routes = [
  {
    path: '*',
    name: 'not-found',
    component: PageNotFound,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
