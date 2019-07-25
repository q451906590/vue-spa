import Vue from 'vue';
import App from './App.vue';
import routes from './router'
import 'es6-promise/auto'
import store from './store/index'


new Vue({
  render: h => h(App),
  router: routes,
  store,
}).$mount('#app')