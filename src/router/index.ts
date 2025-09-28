import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomePage.vue'

import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetailView,
      props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
  ],
})

export default router
