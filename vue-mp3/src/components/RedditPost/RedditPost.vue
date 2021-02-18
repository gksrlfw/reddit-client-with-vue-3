<template>
  <div class="row">
    <div class="col s12">
      <div class="card post row" v-if="post">
        <!-- badge -->
        <div class="col s1 badge-box lighten-5">
          <span class="vertical-center">
            <span class="black-text score">
              <i class="material-icons">arrow_drop_up</i>
              {{ post.score }}
              <i class="material-icons">arrow_drop_down</i>
            </span>
          </span>
        </div>
        <!-- post title -->
        <div class="col s11 content-box">
          <div class="title-info">
            <h5>{{ post.title }}</h5>
            <p>
              Posted {{ postTime }} by
              <a :href="`https://www.reddit.com/u/${post.author}`">{{
                post.author
              }}</a>
            </p>
          </div>
          <!-- post image -->
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
          <!-- post content -->
          <div class="">
            <p>
              <a
                class="grey-text comment-box"
                :href="`https://www.reddit.com/${post.permalink}`"
              >
                <i class="material-icons">comment</i> {{ post.num_comments }}</a
              >
            </p>
          </div>
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
    post: Object
  },
  setup(props) {
    const { post } = toRefs(props);
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
    });

    const postTime = computed(() => {
      return timeago.format(post.value.created_utc * 1000);
    });
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
.badge-box {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.content-box {
  padding: 0px;
  padding-right: 1rem;
}
.score {
  text-align: center;
  float: none;
  border-radius: 4px !important;
  margin-left: 8px !important;
  padding: 0px !important;
  font-size: 10px;
  margin: 1.0933333333rem 0 0.656rem 0;

  /* font-weight: bold; */
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
  height: 100%;
}

.comment-box {
  display: flex;
}
</style>
