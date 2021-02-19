<template>
  <div class="subreddit">
    <!-- reddit info -->
    <section class="info">
      <CircleSpinner v-if="subredditInfo.loading" />
      <ErrorComponent :error="subredditInfo.error" v-if="subredditInfo.error" />
      <RedditPostInfo
        :subreddit-info="subredditInfo"
        v-if="subredditInfo && !subredditInfo.error && !subredditInfo.loading"
      />
    </section>

    <!-- reddit post -->
    <section v-if="postsInfo && posts">
      <LineSpinner v-if="postsInfo.loading" />
      <ErrorComponent :error="postsInfo.error" v-if="postsInfo.error" />
      <RedditPost :post="post" v-for="post in posts" :key="post.id" />
    </section>
  </div>
</template>
<script>
import { computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import usePosts from "@/hooks/usePosts.js";
import useSubreddit from "@/hooks/useSubreddit.js";
import LineSpinner from "@/components/Spinner/LineSpinner.vue";
import CircleSpinner from "@/components/Spinner/CircleSpinner.vue";
import ErrorComponent from "@/components/Error/ErrorComponent.vue";
import RedditPost from "@/components/RedditPost/RedditPost.vue";
import RedditPostInfo from "@/components/RedditPostInfo/RedditPostInfo.vue";
import { throttle, onScrollWithInfinity } from "@/lib/InfiniteScroll";
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
    let postsInfo = usePosts(subredditUrl);
    const subredditInfo = useSubreddit(subredditUrl);

    watch(
      subredditInfo,
      () => {
        document.title = subredditInfo.data?.title || subredditUrl.value;
      },
      { immediate: true }
    );
    const posts = computed(() =>
      postsInfo.data
        .filter(child => !child.data.over_18)
        .map(child => child.data)
    );
    window.addEventListener(
      "scroll",
      throttle(async () => {
        const newPost = await onScrollWithInfinity(subredditUrl);
        if (newPost) postsInfo = newPost;
      }, 200)
    );

    return {
      postsInfo,
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
