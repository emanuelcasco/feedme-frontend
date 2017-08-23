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
  notFound (state) {
    state.projectNotFound = true
  }
}

const actions = {
  findProyect ({ commit }, projectId) {
    projectService.find(projectId)
      .then(result => {
        const project = result
        commit('setProject', project)
        commit('updateProject', project)
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
