<template lang="">
  <div class="">
    <p>
      <a class="grey-text comment-box"
        :href="`https://www.reddit.com/${post.permalink}`">
        <i class="material-icons">comment</i> {{ post.num_comments }}
      </a>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
};
</script>
<style lang=""></style>
