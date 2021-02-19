<template>
  <NavBar />
  <router-view class="container" />
  <TopButton />
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import TopButton from "@/components/TopButton/TopButton.vue";
export default {
  components: {
    NavBar,
    TopButton
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
  // width: 100vw;
  // height: 100vh;
  // overflow: hidden;
  font-weight: bold;
}
#app {
  width: 100%;
  height: 100%;
  // overflow-y: scroll;
}
.half {
  width: 70%;
  margin: 0 auto;
}
</style>
