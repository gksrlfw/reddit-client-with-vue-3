<template>
  <div id="nav">hello</div>
  <router-view />
</template>
<script lang="ts">
import { ref } from "vue";
export default {
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
