import Vue from 'vue';
import App from './App.vue';
import routes from './router'
import 'es6-promise/auto'
import store from './store/index'
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-spa',
    router:routes,
    store,
    render: h => h(App)
  }
});


export const bootstrap = [
  () => {
    return new Promise((resolve, reject) => {
      //注册事件
      window.addEventListener('vue-spa', obj => {
        store.commit('all/setAll', obj.data)
      })
      resolve();
    });
  },
  vueLifecycles.bootstrap,
];

export const mount =  [
  () => {
    return new Promise((resolve, reject) => {
      //获取订阅事件
      window.Publisher.getEvent('vue-spa')
      resolve();
    });
  },
  vueLifecycles.mount,
]

export const unmount = [
  vueLifecycles.unmount,
];
