
const routes = [
  {
    path: '/',
    component: () => import('layouts/inicio/inicio.vue'),
    children: [
      { path: '', component: () => import('pages/ofertas/Ofertas.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
