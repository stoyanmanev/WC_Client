import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import store from '@/store/index';


const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


/////////////////////
/// Guard
// router.beforeEach(function (to, _, next) {
//   if(store.getters['auth/user'] === null && to.path !== '/login'){
//     next('/login');
//   }else if(store.getters['auth/user'] && to.path === '/login'){
//     next('/');
//   }else{
//     next();
//   }
// });

export default router
