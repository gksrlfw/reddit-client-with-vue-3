import api from "@/lib/api";
import { reactive, Ref, watch } from "vue";

export default function useSubreddit(subredditUrl: Ref<string>) {
  const state = reactive({
    loading: false,
    error: '',
    data: null
  });

  async function loadSubreddit() {
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
  }

  watch(subredditUrl, async () => await loadSubreddit(), { immediate: true });
  return state;
}