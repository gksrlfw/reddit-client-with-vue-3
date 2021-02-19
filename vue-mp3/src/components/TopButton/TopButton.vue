<template lang="">
  <button class="fixed btn" @click="goTop">
    top
  </button>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => window.scrollTo(0, 0));
    function goTop() {
      console.log("asdf");
      try {
        window.scrollTo(0, 0);
      } catch (err) {
        console.error(err);
      }
    }
    return {
      goTop
    };
  }
};
</script>
<style lang="scss">
.fixed {
  position: sticky;
  float: right;
  left: 10px;
  bottom: 10px;
}
</style>
