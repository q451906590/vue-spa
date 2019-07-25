const mutations = {
  setAll (state, obj) {
    state.all = obj;
  }
}

const getters = {
  all (state) {
    return state.all
  }
}

const state = {
  all: {}
}

const all = {
  namespaced: true,
  state,
  getters,
  mutations,
}

export default all