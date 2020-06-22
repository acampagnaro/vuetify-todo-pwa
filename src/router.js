import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // Demo is living in GitHub.io, so required! hash history
  history: true,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/:filter',
      name: 'home',
      component: Home,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (['all', 'active', 'completed'].some(record => record === to.params.filter)) {
    next()
  } else {
    next('/all')
  }
})

export default router
