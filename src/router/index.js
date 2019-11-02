import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      meta: { title: '首页' },
      children: [
        {
          path: '/resource',
          component: () => import(/* webpackChunkName: "resource" */ '../views/Resource.vue'),
          meta: { title: '查看资料' }
        },
        {
          path: '/select',
          component: () => import(/* webpackChunkName: "resource" */ '../views/Select.vue'),
          meta: { title: '选择课题' }
        },
        {
          path: '/upload',
          component: () => import(/* webpackChunkName: "resource" */ '../views/Upload.vue'),
          meta: { title: '上传资料' }
        },
        {
          path: '/score',
          component: () => import(/* webpackChunkName: "resource" */ '../views/Score.vue'),
          meta: { title: '查看得分' }
        }
      ]
    }
  ]
})
