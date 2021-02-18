<template>
  <nav>
    <div class="nav-wrapper grey lighten-1">
      <div class="container row navBar">
        <h5 class="black-text title col s1">Reddit</h5>
        <label class="label-icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <form @submit.prevent="updateSubreddit" class="form-box col s11">
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
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { instances, init } from "@/components/NavBar/init";
import api from "@/lib/api.ts";
import palette from "@/lib/palette";

export default {
  setup() {
    const router = useRouter();
    const searchTerm = ref("");
    const subreddit = ref(null);
    let debounceTimeout;

    onMounted(() => {
      init(subreddit, router);
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

    function updateSubreddit() {
      console.log("updateSubreddit", instances);
      clearTimeout(debounceTimeout);
      router.push({
        name: "Main",
        params: {
          subreddit: searchTerm.value
        }
      });
      if (instances) instances.close();
      console.log("asdfasdf");
    }

    return {
      searchTerm,
      subreddit,
      updateSubreddit,
      palette
    };
  }
};
</script>

<style lang="scss">
.title {
  padding: 0px;
  margin: 0px;
  margin-right: 3rem;
}
.navBar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-box {
  border-radius: 50%;
  padding-left: 2rem !important;
}
.form-box {
  height: 3rem;
  padding-left: 1rem;
}
</style>
