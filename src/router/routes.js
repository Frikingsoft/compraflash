
const routes = [
  {
    path: '/',
    component: () => import('layouts/inicio/inicio.vue'),
    children: [
      { path: '', component: () => import('pages/ofertas/Ofertas.vue') }
    ]
  },
  {
    path: '/alimentos',
    component: () => import('layouts/inicio/inicio.vue'),
    children: [
      { path: '/alimentos', component: () => import('pages/alimentos/alimentos.vue') }
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
