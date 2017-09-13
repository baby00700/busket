import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@//components/Hello'
import Sea from '@//components/sea'
import Sea1 from '@//components/sea1'
import Sea2 from '@//components/sea2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Sea
    },
    {
      path: '/sea1',
      component: Sea1
    },
    {
      path: '/sea2',
      component: Sea2
    },
    {
      path: '/hello',
      component: Hello
    }
  ]
})
