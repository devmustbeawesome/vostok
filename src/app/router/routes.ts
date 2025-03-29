const routes = [
  { path: '/', component: () => import('@/pages/Home.vue'), name: 'form' },
  {
    path: '/shift',
    component: () => import('@/pages/ShiftData.vue'),
    name: 'shift',
  },
]
export default routes
