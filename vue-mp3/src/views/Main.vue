<template lang="">
  <SubReddit :name="name" />
</template>
<script lang="ts">
import SubReddit from "../components/RedditPost/SubReddit.vue";

export default {
  components: {
    SubReddit
  },
  setup() {
    const name = "r/korea";
    // const postState = usePosts("aww");
    // const posts = computed(() =>
    //   postState.data.map((child: any) => child.data)
    // );

    return {
      name
    };
  }
};
</script>
