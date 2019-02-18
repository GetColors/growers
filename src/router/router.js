import VueRouter from 'vue-router';

import PageNotFound from "../views/PageNotFound";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/login-page/LoginPage";
import RegisterPage from "../views/register-page/RegisterPage";
import HomePage from "../views/HomePage";

const routes = [
    {
        path: '*',
        name: 'not-found',
        component: PageNotFound
    },
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },
    {
        path: '/login/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register/',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/home/',
        name: 'home',
        component: HomePage
    },
];

const router = new VueRouter({
   routes
});

export default router;