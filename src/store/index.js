import Vue from 'vue'
import Vuex from 'vuex'

import project from './modules/project'
import issue from './modules/issue'
import report from './modules/report'
import step from './modules/step'

Vue.use(Vuex)

// const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    project,
    issue,
    report,
    step
  }
})
