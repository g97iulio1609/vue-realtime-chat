import { createRouter, createWebHistory } from 'vue-router';
import ChatWindow from '@/components/ChatWindow.vue';
import UserProfile from '@/components/UserProfile.vue'; // Assumi di avere un componente per il profilo utente

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ChatWindow
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  // altre rotte...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
