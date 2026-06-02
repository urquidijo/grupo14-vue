import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ReactivityView from '../views/ReactivityView.vue'
import DeclarativeView from '../views/DeclarativeView.vue'
import DirectivesView from '../views/DirectivesView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import EventsView from '../views/EventsView.vue'
import RouterPiniaView from '../views/RouterPiniaView.vue'
import ApiView from '../views/ApiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: HomeView },
    { path: '/reactividad', name: 'reactividad', component: ReactivityView },
    { path: '/renderizado-declarativo', name: 'renderizadoDeclarativo', component: DeclarativeView },
    { path: '/directivas', name: 'directivas', component: DirectivesView },
    { path: '/componentes', name: 'componentes', component: ComponentsView },
    { path: '/eventos', name: 'eventos', component: EventsView },
    { path: '/router-pinia', name: 'routerPinia', component: RouterPiniaView },
    { path: '/consumo-api', name: 'consumoApi', component: ApiView }
  ]
})

export default router
