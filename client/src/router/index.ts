import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/SubReddit.vue";
import Test from "@/views/test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/r/:subreddit",
    name: "Main",
    component: Main
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
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
