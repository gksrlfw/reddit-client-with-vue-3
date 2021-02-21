import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/SubReddit.vue";
import Error from "@/views/Error.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/r/:subreddit",
    name: "Main",
    component: Main
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error
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
