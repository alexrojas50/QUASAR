
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/aboutTest.vue') },
      { path: '/row', component: () => import('pages/rowTest.vue') },
      { path: '/form', component: () => import('pages/FormTest.vue') },
      { path: '/game', component: () => import('pages/GameNumbers') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
