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
  },
}
</script>
<style lang="scss">
* {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: bold;
}
#app {
  width: 100%;
  height: 100%;
}
.half {
  width: 70%;
  margin: 0 auto;
}
.fixed {
  position: sticky;
  top: 0;
}
</style>
