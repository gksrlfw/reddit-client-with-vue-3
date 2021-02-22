<template lang="">
  <form @submit.prevent="updateSubreddit" class="form-box">
    <div class="input-field">
      <input
        id="subredditInput"
        v-model="searchTerm"
        ref="subreddit"
        type="search"
        class="autocomplete grey lighten-3 input-box"
        autocomplete="off"
        placeholder="SEARCH"
      />
    </div>
  </form>
</template>
<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { init } from "@/components/Materialize/AutoComplete";
import SearchPostApi from "@/lib/SearchPostApi";
export default {
  setup() {
    const searchPostApi = new SearchPostApi();
    const router = useRouter();
    const searchTerm = ref("");
    const subreddit = ref(null);

    let instances;
    let debounceTimeout;
    onMounted(() => {
    instances = init(subreddit, router);
    async function getResult() {
      if (searchTerm.value.length < 3) return;
        const response = await searchPostApi.setSearch("search", {
        q: searchTerm.value,
        type: "sr"
      });
      const results = response.data.children.reduce((all, child) => {
      if (!child.data.over18) all[child.data.display_name] = null;
       return all;
      }, {});
      instances.updateData(results);
      instances.open();
    }
    watch(
      () => searchTerm.value,
      () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(async () => {
            await getResult();
        }, 100);
      }
    );
    });
    const updateSubreddit = () => {
      searchPostApi.abort();
      clearTimeout(debounceTimeout);
      router.push({
        name: "Main",
          params: {
          subreddit: searchTerm.value
        }
      });
      if (instances) instances.close();
      searchTerm.value = "";
    };
    return {
      searchTerm,
      subreddit,
      updateSubreddit,
    };
  }
}
</script>
<style lang="css">
#subredditInput {
  border-radius: 1rem;
}
</style>