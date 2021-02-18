<template>
  <NavBar />
  <router-view class="container" />
</template>
<script lang="ts">
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
<style lang="scss">
* {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-weight: bold;
}
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
