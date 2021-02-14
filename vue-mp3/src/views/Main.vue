<template lang="">
  <SubReddit :post-state="postState" :posts="posts" />
</template>
<script lang="ts">
import { computed } from "vue";
import usePosts from "../hooks/usePosts";
import SubReddit from "../components/SubReddit.vue";

export default {
  components: {
    SubReddit
  },
  setup() {
    const postState = usePosts("aww");
    const posts = computed(() =>
      postState.data.map((child: any) => child.data)
    );

    return {
      postState,
      posts
    };
  }
};
</script>
