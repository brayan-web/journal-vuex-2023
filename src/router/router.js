import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/HelloWorld.vue';
import DaybookRouter from '../modules/daybook/router'

const routes = [
    { path: '/', component: Home },
    {
      path: '/daybook',
      ...DaybookRouter
    }

  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router;