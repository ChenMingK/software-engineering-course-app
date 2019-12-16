import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// fix: menu 重复点击报错，这里重写 push 方法貌似只是阻止了报错...
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      redirect: '/login',
      meta: { title: '首页' },
      children: [
        {
          path: '/resource',
          component: () => import(/* webpackChunkName: "resource" */ '../views/Resource.vue'),
          meta: { title: '查看资料' }
        },
        {
          path: '/upload',
          component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
          meta: { title: '上传资料' }
        },
        {
          path: '/uploadTopics',
          component: () => import(/* webpackChunkName: "upload" */ '../views/UploadTopics.vue'),
          meta: { title: '上传课题' }
        },
        {
          path: '/score',
          component: () => import(/* webpackChunkName: "score" */ '../views/Score.vue'),
          meta: { title: '查看得分' }
        },
        {
          path: '/courseSelect',
          component: () => import(/* webpackChunkName: "courseSelect" */ '../views/CourseSelect.vue'),
          meta: { title: '选择课题' }
        },
        {
          path: '/uploadSelect',
          component: () => import(/* webpackChunkName: "uploadSelect" */ '../views/UploadSelect.vue')
        },
        {
          path: '/checkSchedule',
          component: () => import(/* webpackChunkName: "checkSchedule" */ '../views/CheckSchedule.vue')
        },
        {
          path: '/studentsInfo',
          component: () => import(/* webpackChunkName: "studentsInfo" */ '../views/StudentsInfo.vue')
        },
        // {
        //   path: '/scoreReport',
        //   component: () => import(/* webpackChunkName: "scoreReport" */ '../views/ScoreReport.vue')
        // },
        {
          path: '/scoreTeams',
          component: () => import(/* webpackChunkName: "scoreTeams" */ '../views/ScoreTeams.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
      path: '/forgetPassword',
      component: () => import('../views/ForgetPassword.vue')
    },
    {
      path: '/changePassword',
      component: () => import('../views/ChangePssword.vue')
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
