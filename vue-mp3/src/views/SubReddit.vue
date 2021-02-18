<template>
  <div class="subreddit">
    <!-- reddit info -->
    <section class="info">
      <CircleSpinner v-if="subredditInfo.loading" />
      <ErrorComponent :error="subredditInfo.error" v-if="subredditInfo.error" />
      <RedditPostInfo :subredditInfo="subredditInfo" v-if="!subredditInfo.error && !subredditInfo.loading"/>
    </section>

    <!-- reddit post -->
    <section v-if="postInfo && posts">
      <LineSpinner v-if="postInfo.loading" />
      <ErrorComponent :error="postInfo.error" v-if="postInfo.error" />
      <RedditPost v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>
<script>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import usePosts from "@/hooks/usePosts";
import useSubreddit from "@/hooks/useSubreddit";
import LineSpinner from "@/components/Spinner/LineSpinner";
import CircleSpinner from "@/components/Spinner/CircleSpinner";
import ErrorComponent from "@/components/Error/ErrorComponent";
import RedditPost from "@/components/RedditPost/RedditPost.vue";
import RedditPostInfo from "@/components/RedditPostInfo/RedditPostInfo.vue";

export default {
  components: {
    RedditPost,
    LineSpinner,
    CircleSpinner,
    ErrorComponent,
    RedditPostInfo
  },
  setup() {
    const route = useRoute();
    const subredditUrl = computed(() => `/r/${route.params.subreddit}`);
    const postInfo = usePosts(subredditUrl);
    const subredditInfo = useSubreddit(subredditUrl);
    const posts = computed(() =>
      postInfo.data
        .filter(child => !child.data.over_18)
        .map(child => child.data)
    );

    watch(
      subredditInfo,
      () => {
        document.title = subredditInfo.data?.title || "Reddit";
      },
      { immediate: true }
    );

    return {
      postInfo,
      posts,
      subredditInfo
    };
  }
};
</script>
<style lang="scss">
.subreddit {
  font-family: "Comic Sans";
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.banner {
  display: flex;
  justify-content: start;
  .icon {
    margin-right: 2rem;
    img {
      height: 5rem;
    }
  }
}
</style>
