const state = {
  report: {
    project: {},
    owner: {},
    issues: []
  }
}

const getters = {
  report () { return state.report },
  getIssueByIndex (index) { return state.report.issues[index] }
}

const mutations = {
  updateProject (state, project) {
    state.report.project = project
  },
  updateOwner (state, owner) {
    state.report.owner = owner
  },
  addIssue (state, issue) {
    const newIssue = issue
    state.report.issues.push(newIssue)
  },
  editIssue (state, index, issue) {
    state.report.issues[index] = issue
  },
  removeIssue (state, index) {
    state.report.issues.splice(index, 1)
  },
  clearReport (state) {
    state.report = {
      project: {},
      owner: {},
      issues: []
    }
  }
}

const actions = {
  updateProject ({ commit }, project) {
    commit('updateProject', project)
  },
  updateOwner ({ commit }, owner) {
    commit('updateOwner', owner)
  },
  addIssue ({ commit }, issue) {
    commit('addIssue', issue)
  },
  editIssue ({ commit }, index, issue) {
    commit('editIssue', index, issue)
  },
  removeIssue ({ commit }, index) {
    commit('removeIssue', index)
  },
  clearReport ({ commit }) {
    commit('clearReport')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
