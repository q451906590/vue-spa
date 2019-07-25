import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentA from './Components/ComponentA/ComponentA.vue';
import ComponentB from './Components/ComponentB/ComponentB.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    redirect: '/vue/ComponentA'
  },
  { path: '/vue/ComponentA', component: ComponentA },
  { path: '/vue/ComponentB', component: ComponentB }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;