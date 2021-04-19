import Vue from 'vue';
import VueRouter from 'vue-router';
import Navigation from "@/views/Navigation";

Vue.use(VueRouter);

const routes = [
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation,
  },
  {
    path: '/editor',
    name: 'Editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/Editor.vue"),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('@/views/Grid.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
