import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Sent from '@/components/pages/Sent'
import ReportForm from '@/components/pages/ReportForm'
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sent',
      name: 'sent',
      component: Sent
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
