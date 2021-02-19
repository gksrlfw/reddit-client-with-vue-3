import { reactive, watch } from "vue";
import SearchPostApi from "@/lib/SearchPostApi";

export default function usePosts(subreddit, params = {}, page) {
  const searchPostApi = new SearchPostApi();
  const postsState = reactive({
    loading: false,
    error: "",
    data: []
  });

  async function loadData() {
    console.log("reloading data...");
    try {
      postsState.loading = true;
      postsState.error = "";
      postsState.data = [];
      console.log(page);
      const response = await searchPostApi.setSearch(
        subreddit.value,
        params,
        page
      );
      postsState.data = response.data.children;
    } catch (error) {
      postsState.error = error.message || "Error loading posts.";
    } finally {
      postsState.loading = false;
    }
  }

  watch(subreddit, loadData, { immediate: true });

  return postsState;
}
