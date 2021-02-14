<template lang="">
  <div class="home">
    <div>
      <!-- loading -->
      <div class="progress light-blue lighten-4" v-if="postState.loading">
        <div class="indeterminate"></div>
      </div>
      <!-- error -->
      <div class="card red" v-if="postState.error">
        <div class="card-content white-text">
          <span class="card-title">{{ postState.error }}</span>
        </div>
      </div>
      <!-- post -->
      <div class="row">
        <div class="col s6" v-for="post in posts" :key="post.id">
          <div class="card post">
            <div
              class="card-image waves-effect waves-block waves-light"
              v-if="isImage(post.url)"
            >
              <img class="activator" :src="post.url" />
            </div>
            <div
              class="card-image waves-effect waves-block waves-light"
              v-if="isVideo(post)"
            >
              <video class="activator video" controls muted autoplay loop>
                <source :type="`video/mp4`" :src="getVideoUrl(post)" />
              </video>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">{{
                post.title
              }}</span>
              <p>
                <a :href="`https://www.reddit.com/${post.permalink}`"
                  >Comments</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="post in posts" :key="post.id"></div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import usePosts from "../hooks/usePosts";
export default {
  setup() {
    const postState = usePosts("all");
    const posts = computed(() =>
      postState.data.map((child: any) => child.data)
    );

    function isImage(url: string) {
      return url.match(/bmp|webp|png|jpg|jpeg|gif$/);
    }

    function isVideo(post: any) {
      // if (url.match(/mp4|gifv|mkv|mov|webm$/))
      //   console.log(url, url.match(/mp4|gifv|mkv|mov|webm$/));

      return post.media || post.url.match(/mp4|gifv|mkv|mov|webm$/);
    }

    function getVideoUrl(post: any) {
      if (post.media) return post.media.reddit_video.scrubber_media_url;
      const parts = post.url.split(".");
      parts.pop();
      console.log(parts);

      return parts
        .concat(".mp4")
        .join(".")
        .replace("..", ".");
    }
    return {
      postState,
      posts,
      isImage,
      isVideo,
      getVideoUrl
    };
  }
};
</script>
<style>
.post {
  height: 100%;
}
.video {
  width: 100%;
}
</style>
