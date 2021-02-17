<template>
  <NavBar />
  <!-- <div class="grey darken-4"> -->
  <router-view class="container" />
  <!-- </div> -->
</template>
<script lang="ts">
import { ref } from "vue";
// import Main from "./views/Main.vue";
import NavBar from "./components/NavBar/NavBar.vue";
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
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
