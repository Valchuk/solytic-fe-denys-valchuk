import { APP_ROUTER_PATHS } from '@/app-constants';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    name: 'home',
    path: APP_ROUTER_PATHS.home,
    component: () => import('@/pages/Home.vue'),
    props: {
      showInMenu: true,
      label: 'Home',
    },
  },
  {
    name: 'login',
    path: APP_ROUTER_PATHS.login,
    component: () => import('@/pages/Login.vue'),
    props: {
      label: 'Login',
      isLogged: false,
    },
  },
  {
    name: 'userDetails',
    path: APP_ROUTER_PATHS.userDetails,
    component: () => import('@/pages/UserDetails.vue'),
    props: {
      showInMenu: false,
      isLogged: true,
      label: 'User Details',
    },
  },
  {
    name: 'error',
    path: APP_ROUTER_PATHS.error,
    component: () => import('@/pages/Error.vue'),
    props: {
      showInMenu: false,
      label: '404',
    },
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
