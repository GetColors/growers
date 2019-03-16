import VueRouter from 'vue-router';

import PageNotFound from '../views/page-not-found/PageNotFound.vue';
import HomePage from '../views/home/HomePage.vue';
import Login from "../views/landing/Login";
import Register from "../views/landing/Register";

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

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
