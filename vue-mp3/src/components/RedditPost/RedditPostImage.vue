<template lang="">
  <!-- <div class="card-image waves-effect waves-block waves-light" v-if="isImage"> -->
  <div class="card-image waves-block waves-light" v-if="isImage">
    <img class="activator materialboxed" @click="imgc" :data-lazy="post.url" />
  </div>
  <div class="card-image waves-effect waves-block waves-light" v-if="isVideo">
    <video class="activator video" controls muted autoplay loop>
      <source :type="`video/mp4`" :src="videoUrl" :data-lazy="videoUrl" />
    </video>
  </div>
</template>
<script>
import { computed, onMounted, toRefs } from "vue";
import { initMaterialbox } from "@/components/Materialize/Material";
export default {
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const { post } = toRefs(props);

    let instances;
    onMounted(() => (instances = initMaterialbox(".materialboxed")));

    function imgc(e) {
      instances.map((i, index) => {
        // if (i.el === e.target) {
        //   instances[index].open();
        //   document.body.addEventListener("keydown", e => {
        //     if (e.key === "Escape" || e.key === "escape") {
        //       instances[index].close();
        //     }
        //   });
        // }
      });
      //   openImage(e.target);
      //   instance.open();
      //   openImage(".materialboxed");
    }

    const isVideo = computed(
      () =>
        (post.value.secure_media && post.value.secure_media.reddit_video) ||
        post.value.url.match(/mp4|gifv|mkv|mov|webm|gif$/)
    );
    const isImage = computed(() =>
      post.value.url.match(/bmp|webp|png|jpg|jpeg$/)
    );

    const videoUrl = computed(() => {
      if (post.value.secure_media && post.value.secure_media.reddit_video)
        return post.value.media.reddit_video.fallback_url;
      const parts = post.value.url.split(".");
      parts.pop();
      return parts
        .concat(".mp4")
        .join(".")
        .replace("..", ".");
    });
    return {
      isVideo,
      isImage,
      videoUrl,
      imgc
    };
  }
};
</script>
<style lang=""></style>
