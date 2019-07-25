import state from './state';
import getters from './getters';
import mutations from './mutations';

const moduleB = {
  namespaced: true,
  state,
  getters,
  mutations,
}

export default moduleB