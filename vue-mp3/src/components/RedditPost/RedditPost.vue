<template>
  <div class="row">
    <div class="col s12">
      <div class="card post" v-if="post">
        <div class="card-content title-info">
          <span class="card-title vertical-center">
            <span class="new badge blue white-text score">{{
              post.score
            }}</span>
            {{ post.title }}</span
          >
          <p>
            Posted {{ postTime }} by
            <a :href="`https://www.reddit.com/u/${post.author}`">{{
              post.author
            }}</a>
          </p>
        </div>
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
          <p>
            <a :href="`https://www.reddit.com/${post.permalink}`">{{
              post.num_comments
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
import * as timeago from "timeago.js";
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

    const postTime = computed(() => {
      return timeago.format(post.value.created_utc * 1000);
    });
    // console.log(postTime, post.created);
    return {
      isImage,
      isVideo,
      videoUrl,
      postTime
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
.title-info {
  padding-bottom: 0px;
}
.score {
  float: none;
  border-radius: 10px;
  margin-right: 8px;
  padding: 6px;
}

.vertical-center {
  display: flex;
  align-items: center;
}
</style>
