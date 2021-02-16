<template lang="">
  <nav>
    <div class="nav-wrapper light-blue lighten-4">
      <form @submit.prevent="updateSubreddit">
        <div class="input-field">
          <input
            id="subredditInput"
            v-model="searchTerm"
            ref="subreddit"
            type="search"
            class="autocomplete"
            autocomplete="off"
          />
          <label class="label-icon" for="search"
            ><i class="material-icons">search</i></label
          >
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import M from "@/../public/js/materialize.js";
import api from "@/apis/api.ts";
import state from "@/store/diy";

export default {
  setup() {
    const searchTerm = ref("");
    const subreddit = ref(null);
    let instances;
    let debounceTimeout;
    onMounted(() => {
      instances = M.Autocomplete.init(subreddit.value, {
        data: {},
        onAutocomplete(result) {
          console.log(result);
          state.subreddit.value = `r/${result}`;
        }
      });

      async function getResult() {
        if (searchTerm.value.length < 3) return;
        const response = await api.getPosts("search", {
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
      clearTimeout(debounceTimeout);
      state.subreddit.value = `r/${searchTerm.value}`;
      if (instances) instances.close();
    };

    return {
      searchTerm,
      subreddit,
      updateSubreddit
    };
  }
};
</script>

<style lang=""></style>
