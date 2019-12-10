import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
          path: '/select',
          component: () => import(/* webpackChunkName: "select" */ '../views/Select.vue'),
          meta: { title: '选择课题' }
        },
        {
          path: '/upload',
          component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
          meta: { title: '上传资料' }
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
          path: '/checkSelect',
          component: () => import(/* webpackChunkName: "checkSelect" */ '../views/CheckSelect.vue')
        },
        {
          path: '/studentsInfo',
          component: () => import(/* webpackChunkName: "studentsInfo" */ '../views/StudentsInfo.vue')
        },
        {
          path: '/scoreReport',
          component: () => import(/* webpackChunkName: "scoreReport" */ '../views/ScoreReport.vue')
        },
        {
          path: '/scoreSchedule',
          component: () => import(/* webpackChunkName: "scoreSchedule" */ '../views/ScoreSchedule.vue')
        },
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
      path: '*',
      redirect: '/resource'
    }
  ]
})
