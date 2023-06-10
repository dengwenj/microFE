import { createRouter, createWebHashHistory} from 'vue-router'

import Test1 from '@/views/Test1'
import Test2 from '@/views/Test2'
import Test3 from '@/views/Test3'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue-app/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/vue-app/test2',
      name: 'test2',
      component: Test2
    },
    {
      path: '/vue-app/test3',
      name: 'test3',
      component: Test3
    },
  ]
})

export default router
