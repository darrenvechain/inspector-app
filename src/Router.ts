import { Vue, Component } from 'vue-property-decorator'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contracts from './views/Contracts.vue'
import Deploy from './views/DeployContract.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      name: 'home',
      component: Home,
      path: '/home'
    },
    {
      name: 'contracts',
      component: Contracts,
      path: '/contracts'
    },
    {
      name: 'deploy',
      component: Deploy,
      path: '/deploy'
    }
  ]
})

export default router
