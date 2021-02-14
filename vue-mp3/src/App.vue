<template>
  <NavBar />
  <router-view class="container" />
</template>
<script lang="ts">
import { ref } from "vue";
// import Main from "./views/Main.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  setup() {
    const count = ref("");
    const a = ref("");
    return {
      count,
      a
    };
  }
};
</script>
