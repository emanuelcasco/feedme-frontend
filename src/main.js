// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import Vuetify from 'vuetify'

import App from './App'

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

import langEn from '@/validator/dictionaries/en'
import langEs from '@/validator/dictionaries/es'
Validator.addLocale(langEs)
Validator.addLocale(langEn)

import Loader from '@/components/shared/Loader'

import EventBus from '@/plugins/event-bus'

Vue.config.productionTip = false

Vue.use(VeeValidate, { locale: 'en' })
Vue.use(EventBus)
Vue.use(Vuetify)

Vue.component('loader', Loader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
