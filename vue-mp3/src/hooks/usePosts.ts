import api from "@/lib/api";
import { RedditPostState } from "@/interface/RedditPostState";
import { RedditPostResponse } from "@/interface/RedditPostResponse";
import { reactive, Ref, UnwrapRef, watch } from "vue";

// subreddit: ref
export default function usePosts<T>(subredditUrl: Ref<string>, params?: string) {
  const postsState = reactive<RedditPostState<T>>({
    loading: false,
    error: "",
    data: null
  });

  async function loadData() {    
    try {
      postsState.loading = true;
      postsState.error = '';
      postsState.data = null;
      
      const response: RedditPostResponse = await api.getPosts(subredditUrl.value);
      if(response !== undefined && response.data) {
        postsState.data = response.data.children as UnwrapRef<T>
        console.log('load', postsState);
      }
      else postsState.data = null;
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
  watch(subredditUrl, async () => await loadData(), { immediate: true });

  console.log('22222222222222222222', postsState, subredditUrl.value);
  
  return postsState;
}
