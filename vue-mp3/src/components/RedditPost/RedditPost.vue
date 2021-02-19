<template>
  <div class="card post Reddit" v-if="post">
    <RedditPostSide :post="post" />
    <div class="content-box">
      <RedditPostTitle :post="post" />
      <RedditPostImage :post="post" />
      <RedditPostContent :post="post" />
    </div>
  </div>
</template>
<script>
import RedditPostSide from "@/components/RedditPost/RedditPostSide.vue";
import RedditPostTitle from "@/components/RedditPost/RedditPostTitle.vue";
import RedditPostImage from "@/components/RedditPost/RedditPostImage.vue";
import RedditPostContent from "@/components/RedditPost/RedditPostContent.vue";
export default {
  props: {
    post: Object
  },
  components: {
    RedditPostSide,
    RedditPostTitle,
    RedditPostImage,
    RedditPostContent
  },
  setup() {

    return {
    };
  }
};
</script>
<style lang="scss">
.Reddit {
  display: flex;
  // align-items: center;
}
.score {
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  button {
    padding: 0px;
  }
  i {
    font-size: 2rem;
  }
}
.post {
  height: 100%;
}

.content-box {
  padding: 0px;
  padding-right: 1rem;
}

.video {
  width: 100%;
}
.title-info {
  padding-bottom: 0px;
}

.comment-box {
  display: flex;
}
</style>
