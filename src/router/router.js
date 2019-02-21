import VueRouter from 'vue-router';

import PageNotFound from '../views/PageNotFound.vue';
import LandingPage from '../views/LandingPage.vue';
import LoginPage from '../views/login-page/LoginPage.vue';
import RegisterPage from '../views/register-page/RegisterPage.vue';
import HomePage from '../views/home-page/HomePage.vue';

const routes = [
  {
    path: '*',
    name: 'not-found',
    component: PageNotFound,
  },
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/home/',
    name: 'home',
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
