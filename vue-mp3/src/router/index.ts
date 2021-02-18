import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SubReddit from "@/views/SubReddit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/r/:subreddit",
    name: "Main",
    component: SubReddit
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Main') next({ 
    name: 'Main',
    params: {
      subreddit: 'all'
    }
  });
  else next();
});

export default router;
