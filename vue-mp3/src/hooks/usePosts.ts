import api from "@/apis/api";
import { reactive, Ref, watch } from "vue";

// subreddit: ref
export default function usePosts(subredditUrl: Ref<string>, params?: string) {
  const postsState = reactive({
    loading: false,
    error: "",
    data: []
  });

  async function loadData() {
    console.log('loaddata', subredditUrl, subredditUrl.value);
    
    try {
      postsState.loading = true;
      postsState.error = '';
      postsState.data = [];
      console.log("asdfasdf", subredditUrl.value);
      
      const response = await api.getPosts(subredditUrl.value);
      postsState.data = response.data.children;
    }
    catch(err) {
      postsState.error = err.message || 'Error loading posts';
    }
    finally {
      postsState.loading = false;
    }
  }

  // subredditUrl은 reactive가 아님.. watcheffect를 하면 reactive인 것들은 자동으로 해주는데
  // subredditUrl은 못해주니까 watch로 명시해줘야한다.
  // subredditUrl이 변하면 loadData를 실행한다
  watch(subredditUrl, loadData, { immediate: true });

  return postsState;
}
