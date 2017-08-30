import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import ReportForm from '@/components/pages/ReportForm'
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/report/:hash',
      name: 'report',
      props: true,
      component: ReportForm
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
