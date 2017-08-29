const state = {
  issue: {
    desc: '',
    type: '1',
    criticity: '1',
    priority: '1'
  }
}

const getters = {
  issue () { return state.issue }
}

const mutations = {
  updateIssue (state, issue) {
    state.issue = issue
  }
}

const actions = {
  updateIssue ({ commit }, issue) {
    commit('updateIssue', issue)
  },
  clearIssue ({ commit }) {
    const issue = {
      desc: '',
      criticity: '1',
      priority: '1'
    }
    commit('updateIssue', issue)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
