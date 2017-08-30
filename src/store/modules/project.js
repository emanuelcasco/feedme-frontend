import projectService from '@/api/project'

const state = {
  project: null,
  projectNotFound: false
}

const getters = {
  project () { return state.project },
  projectNotFound () { return state.projectNotFound }
}

const mutations = {
  setProject (state, project) {
    state.project = project
    state.projectNotFound = false
  },
  projectNotFound (state, value) {
    state.projectNotFound = value
  }
}

const actions = {
  findProyect ({ commit }, hash) {
    projectService.findProjectByHash(hash)
      .then(result => {
        if (result) {
          const project = result
          commit('projectNotFound', false)
          commit('setProject', project)
          commit('updateProject', project)
        } else {
          commit('projectNotFound', true)
        }
      })
  },
  clearProject ({ commit }) {
    commit('setProject', null)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
