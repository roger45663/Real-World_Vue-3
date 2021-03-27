import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventDetails from '@/views/EventDetails.vue'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event_details/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
