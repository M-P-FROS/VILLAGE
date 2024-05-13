import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/PageNotFound.vue')
    },

    {
      path: '/components/Presentation.vue',
      name: 'Presentation',
      component: () => import('../components/Presentation.vue')
    },

    {
      path: '/components/Creations.vue',
      name: 'Creations',
      component: () => import('../components/Creations.vue')
    },

    {
      path: '/components/Formulaire.vue',
      name: 'Formulaire',
      component: () => import('../components/Formulaire.vue')
    },
  ]
})

                  



export default router
