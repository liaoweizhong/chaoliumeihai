import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/base/index/index.vue'

import login from '@/components/base/login/index.vue'
import updateVideo from '@/components/base/updateFile/index.vue'
import video from '@/components/base/video/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/updateVideo',
      name: '上传',
      component: updateVideo
    },
    {
      path: '/video/:id?',
      name: '上传',
      component: video
    }
  ]
})
