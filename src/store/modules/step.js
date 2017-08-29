const state = {
  step: 2
}

const getters = {
  step () { return state.issue }
}

const mutations = {
  updateStep (state, step) {
    state.step = step
  }
}

const actions = {
  updateStep ({ commit }, step) {
    commit('updateStep', step)
  },
  moveForward ({ commit }) {
    commit('updateStep', state.step + 1)
  },
  moveBackward ({ commit }) {
    commit('updateStep', state.step - 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
