<template lang="">
  <button class="fixed btn" @click="goTop">
    top
  </button>
</template>

<script>
export default {
  setup() {
    function goTop() {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
  right: 2rem;
  bottom: 2rem;
}
</style>
