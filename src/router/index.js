import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue';
import LeftNav from '../components/LeftNav.vue';
import RightNav from '../components/RightNav.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }, 
    {
      path: '/leftnav',
      name: 'LeftNav',
      component: LeftNav
    }, 
    {
      path: '/rightnav',
      name: 'RightNav',
      component: RightNav
    },
    ]
  })