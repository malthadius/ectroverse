import Vue from 'vue';
import Router from "vue-router";
import Home from '../pages/Home.vue';
import Register from '../pages/Register';
import RegisterDetails from '../pages/RegisterDetails';
import Faq from '../pages/Faq';
import Guide from '../pages/Guide';
import GettingStarted from "../pages/GettingStarted";
import Headquarters from "../pages/Headquarters";

Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/register_details',
      name: 'RegisterDetails',
      component: RegisterDetails
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/getting_started',
      name: 'Getting Started',
      component: GettingStarted
    },
    {
      path: '/headquarters',
      name: 'Headquarters',
      component: Headquarters
    }
  ]
})
