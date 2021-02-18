<template>
  <nav>
    <div class="nav-wrapper grey lighten-1">
      <div class="container row navBar">
        <h5 class="black-text title col s1">Reddit</h5>
        <label class="label-icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <form @submit.prevent="updateSubreddit" class="form-box col s6">
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
        <div class="col s3">
          <button
            data-target="modal1"
            class="btn modal-trigger"
            @click="openLoginModal = !openLoginModal"
          >
            LOGIN
          </button>

          <button
            data-target="modal2"
            class="btn modal-trigger"
            @click="openRegisterModal = !openRegisterModal"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  </nav>
  <LoginModal v-if="openLoginModal" />
  <RegisterModal v-if="openRegisterModal" />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { instances, init } from "@/components/NavBar/init";
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
    const openLoginModal = ref(false);
    const openRegisterModal = ref(false);
    let debounceTimeout;

    onMounted(() => {
      init(subreddit, router);
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

    function updateSubreddit() {
      clearTimeout(debounceTimeout);
      searchPostApi.abort();
      router.push({
        name: "Main",
        params: {
          subreddit: searchTerm.value
        }
      });
      if (instances) instances.close();
    }

    // function openLoginModal() {

    //   // const elems = document.querySelectorAll(".modal");
    //   // const instance = M.Modal.init(elems);
    //   // console.log(instance);
    // }

    return {
      searchTerm,
      subreddit,
      updateSubreddit,
      openLoginModal,
      openRegisterModal
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
  justify-content: space-between;
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
