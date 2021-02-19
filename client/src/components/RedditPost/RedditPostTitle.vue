<template lang="">
  <div class="title-info">
    <h5>{{ post.title }}</h5>
    <p>
      Posted {{ postTime }} by
      <a :href="`https://www.reddit.com/u/${post.author}`">{{ post.author }}</a>
    </p>
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
import * as timeago from "timeago.js";
export default {
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const { post } = toRefs(props);

    const postTime = computed(() => {
      return timeago.format(post.value.created_utc * 1000);
    });
    return {
      postTime
    };
  }
};
</script>
<style lang=""></style>
