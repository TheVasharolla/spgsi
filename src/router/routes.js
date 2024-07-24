const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/OverviewPage.vue') },
      { path: '/balances', component: () => import('src/pages/BalancesPage.vue') },
      { path: '/collections', component: () => import('src/pages/CollectionsPage.vue') },
      { path: '/settlement', component: () => import('src/pages/SettlementsPage.vue') },
      { path: '/customers', component: () => import('src/pages/CustomersPage.vue') },
      { path: '/payout', component: () => import('src/pages/PayoutPage.vue') },
      { path: '/conversion', component: () => import('src/pages/ConversionPage.vue') },
      { path: '/settings', component: () => import('src/pages/SettingsPage.vue') },
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
