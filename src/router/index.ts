import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'sign in',
      
      component: () => import('../views/SignIn.vue')
    }
    ,
    {
      path: '/signup',
      name: 'sign up',
      
      component: () => import('../views/SignUp.vue')
    },
    {
      path:'/dashboard',
      name: 'dashboard',
      component:()=>import('../views/MyStore.vue'),
      
    },
    {
      path:'/dashboard/upload-product',
      name:'upload-product',
      component:()=>import('../views/UploadProduct.vue')
    }
  ]
})

export default router