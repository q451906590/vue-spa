import Vuex from 'vuex';
import Vue from 'vue';
import moduleA from '../Components/ComponentA/module/index'
import moduleB from '../Components/ComponentB/module/index'
import all from './all'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    all,
  }
})

export default store;