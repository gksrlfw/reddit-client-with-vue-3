import api from "@/apis/api";
import { reactive, Ref, watch } from "vue";

export default function useSubreddit(subredditUrl: Ref<string>) {
  const state = reactive({
    loading: false,
    error: '',
    data: null
  });

  watch(subredditUrl, async () => {
    state.loading = true;
    state.error = '';
    state.data = null;
    try {            
      const data = await api.getSubreddit(subredditUrl.value);
      state.data = data;
    }
    catch(err) {
      state.error = err.message;
    }
    finally {
      state.loading = false;
    }
  }, { immediate: true });
  console.log(state);
  
  return state;
}