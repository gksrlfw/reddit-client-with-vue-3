import { reactive, watch } from "vue";

import api from "@/lib/api.js";

export default function useSubreddit(subreddit) {
  const state = reactive({
    loading: false,
    error: "",
    data: null
  });

  watch(
    subreddit,
    async () => {
      console.log("Getting subreddit...", subreddit.value);
      state.loading = true;
      state.error = "";
      state.data = null;
      try {
        const data = await api.getSubreddit(subreddit.value);
        state.data = data;
      } catch (error) {
        state.error = error.message;
      } finally {
        setTimeout(() => {
          state.loading = false;
        }, 700);
      }
    },
    {
      immediate: true
    }
  );

  return state;
}
