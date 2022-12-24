import { createRouter, createWebHistory } from 'vue-router';
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware';
import { RouteNamesEnum } from '@/types/router.types';
// import { AppLayoutsEnum } from '@/types/layouts.types';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: RouteNamesEnum.index,
          component: () => import('../pages/IndexPage.vue'),
        },
        {
          path: 'flow',
          name: RouteNamesEnum.flow,
          component: () => import('../pages/FlowPage.vue'),
        },
        {
          path: 'chat',
          name: RouteNamesEnum.chat,
          component: () => import('../pages/IndexPage.vue'),
        },
        {
          path: 'settings',
          name: RouteNamesEnum.settings,
          component: () => import('../pages/IndexPage.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
