/* eslint-disable vue/require-default-prop */
<template>
  <div class="col s12">
    <div class="card post" v-if="post">
      <div
        class="card-image waves-effect waves-block waves-light"
        v-if="isImage"
      >
        <img class="activator" :src="post.url" />
      </div>
      <div
        class="card-image waves-effect waves-block waves-light"
        v-if="isVideo"
      >
        <video class="activator video" controls muted autoplay loop>
          <source :type="`video/mp4`" :src="videoUrl" />
        </video>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{
          post.title
        }}</span>
        <p>
          <a :href="`https://www.reddit.com/${post.permalink}`">Comments</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object
  },
  setup(props) {
    // props.post로도 되는지 확인하기..
    // console.log(props.post);
    const { post } = toRefs(props);
    if (!post) return;
    // 함수로 만들면 계속 렌더한다 -> computed로 하자
    const isVideo = computed(
      () =>
        (post.value.secure_media && post.value.secure_media.reddit_video) ||
        post.value.url.match(/mp4|gifv|mkv|mov|webm$/)
    );
    const isImage = computed(() =>
      post.value.url.match(/bmp|webp|png|jpg|jpeg|gif$/)
    );

    const videoUrl = computed(() => {
      if (post.value.secure_media && post.value.secure_media.reddit_video)
        return post.value.media.reddit_video.fallback_url;
      const parts = post.value.url.split(".");
      parts.pop();
      return parts.concat(".mp4").join(".");
      // .replace("..", ".");
    });
    return {
      isImage,
      isVideo,
      videoUrl
    };
  }
};
</script>
<style scoped>
.post {
  height: 100%;
}
.video {
  width: 100%;
}
</style>
