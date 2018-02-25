import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Meteo from '@/components/Meteo'
import Twitter from '@/components/Twitter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/twitter',
      name: 'Twitter',
      component: Twitter
    },
    {
      path: '/meteo',
      name: 'Meteo',
      component: Meteo
    }
  ]
})
