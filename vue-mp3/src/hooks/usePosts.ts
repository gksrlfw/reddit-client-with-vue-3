import api from "@/apis/api";
import { reactive, watch } from "vue";

export default function usePosts(subreddit: string) {
  const postsState = reactive({
    loading: false,
    error: "",
    data: []
  });

  async function loadData() {
    try {
      postsState.loading = true;
      postsState.error = '';
      postsState.data = [];

      const response = await api.getPosts(subreddit);
      postsState.data = response.data.children;
    }
    catch(err) {
      postsState.error = err.message || 'Error loading posts';
    }
    finally {
      postsState.loading = false;
    }
  }

  // subreddit은 reactive가 아님.. watcheffect를 하면 reactive인 것들은 자동으로 해주는데
  // subreddit은 못해주니까 watch로 명시해줘야한다.
  // subreddit이 변하면 loadData를 실행한다
  watch(() => subreddit, loadData, { immediate: true });

  return postsState;
}
