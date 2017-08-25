import Vue from 'vue'
import VueI18n from 'vue-i18n'

import langEN from './commons/en'
import langES from './commons/es'

Vue.use(VueI18n)

const messages = {
  en: langEN,
  es: langES
}

const i18n = new VueI18n({ messages })

export default i18n
