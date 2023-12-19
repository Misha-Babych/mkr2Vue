import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ChildFormView from '@/views/ChildFormView.vue';
import ChildListView from '@/views/ChildListView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/child-form', component: ChildFormView },
  { path: '/child-list', component: ChildListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
