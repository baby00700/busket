import Vue from 'vue'
import Router from 'vue-router'
import root0 from '@/components/root0'
import xsbm from '@/components/xsbm'
import xfjn from '@/components/xfjn'
import ssfp from '@/components/ssfp'
import zxyp from '@/components/zxyp'
import dxdj from '@/components/dxdj'
import sssm from '@/components/sssm'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: root0
    },
    {
      path: '/xsbm',
      component: xsbm
    },
    {
      path: '/xfjn',
      component: xfjn
    },
    {
      path: '/ssfp',
      component: ssfp
    },
    {
      path: '/zxyp',
      component: zxyp
    },
    {
      path: '/dxdj',
      component: dxdj
    },
    {
      path: '/sssm',
      component: sssm
    }

  ]
})
