<template lang="">
  <SubReddit :name="state.subreddit" />
</template>
<script lang="ts">
import SubReddit from "@/components/RedditPost/SubReddit.vue";
import state from "@/store/diy";
export default {
  components: {
    SubReddit
  },
  setup() {
    return {
      state
    };
  }
};
</script>
