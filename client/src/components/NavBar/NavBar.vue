<template>
  <nav>
    <div class="nav-wrapper grey lighten-1 ">
      <div class="container nav-bar half">
        <h5 class="black-text title">
          <router-link
            :to="{
              name: 'Main',
              params: {
                subreddit: 'all'
              }
            }"
            >Reddit</router-link
          >
        </h5>
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
        <div class="modal-btn">
          <button data-target="login" class="btn modal-trigger">
            LOGIN
          </button>
          <button data-target="register" class="btn modal-trigger">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  </nav>
  <LoginModal />
  <RegisterModal />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { init } from "@/components/Materialize/AutoComplete";
import SearchPostApi from "@/lib/SearchPostApi";
import LoginModal from "@/components/Auth/LoginModal.vue";
import RegisterModal from "@/components/Auth/RegisterModal.vue";

export default {
  components: {
    LoginModal,
    RegisterModal
  },
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
    };

    return {
      searchTerm,
      subreddit,
      updateSubreddit
    };
  }
};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  padding: 0px;
  margin: 0px;
  margin-right: 2rem;
  padding-bottom: 0.3rem;
}
.input-box {
  padding-left: 2rem !important;
}
.form-box {
  height: 3rem;
  width: 50%;
  padding-left: 1rem;
}
.modal-btn {
  margin-left: 3rem;
}
@media screen and (max-width: 1300px) {
  .form-box {
    display: none !important;
  }
}
</style>
