/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-10-09 11:22:29
*/
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('view/index.vue'),
      children: [
        {
          path: 'a',
          name: 'a',
          component: () => import('view/a.vue')
        },
        {
          path: 'b',
          name: 'b',
          redirect: { name: 'ba' },
          children: [
            {
              path: 'ba',
              name: 'ba',
              meta: {
                markName: 'b'
              },
              component: () => import('view/ba.vue')
            },
            {
              path: 'bb',
              name: 'bb',
              meta: {
                markName: 'b'
              },
              component: () => import('view/bb.vue')
            }
          ]
        },
        {
          path: 'c',
          name: 'c',
          redirect: { name: 'ca' },
          children: [
            {
              path: 'ca',
              name: 'ca',
              redirect: { name: 'caa' },
              children: [
                {
                  path: 'caa',
                  name: 'caa',
                  redirect: { name: 'caaa' },
                  children: [
                    {
                      path: 'caaa',
                      name: 'caaa',
                      component: () => import('view/caaa.vue')
                    },
                    {
                      path: 'caab',
                      name: 'caab',
                      component: () => import('view/caab.vue')
                    }
                  ]
                },
                {
                  path: 'cab',
                  name: 'cab',
                  component: () => import('view/cab.vue')
                }
              ]
            },
            {
              path: 'cb',
              name: 'cb',
              component: () => import('view/cb.vue')
            }
          ]
        },
        {
          path: 'd',
          name: 'd',
          redirect: { name: 'da' },
          children: [
            {
              path: 'da',
              name: 'da',
              component: () => import('view/da.vue')
            },
            {
              path: 'db',
              name: 'db',
              component: () => import('view/db.vue')
            },
            {
              path: 'daa',
              name: 'daa',
              meta: {
                markName: 'da'
              },
              component: () => import('view/daa.vue')
            },
          ]
        },
        {
          path: 'f',
          name: 'f',
          component: () => import('view/f.vue')
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
});
export default router;