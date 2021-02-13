<template lang="">
  <div>{{ str }}</div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const str = ref("main");
    return {
      str
    };
  }
};
</script>
<style lang=""></style>
