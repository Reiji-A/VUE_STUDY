import Vue from 'vue'
import Router from 'vue-router'

const routeOptions = [
  { path: '/', component: 'Home' },
  { path: '*', component: 'About'}
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
