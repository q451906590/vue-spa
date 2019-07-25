import state from './state';
import getters from './getters';
import mutations from './mutations';

const moduleA = {
  namespaced: true,
  state,
  getters,
  mutations,
}

export default moduleA