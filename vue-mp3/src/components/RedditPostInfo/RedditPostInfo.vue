<template>
  <div class="card" v-if="!subredditInfo.error && !subredditInfo.loading">
    <div class="card-image" v-if="subredditInfo?.data?.banner_img">
      <img :src="subredditInfo.data.banner_img" alt="" />
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content banner">
      <div class="icon" v-if="subredditInfo.data.icon_img">
        <img :src="subredditInfo.data.icon_img" class="circle" />
      </div>
      <div>
        <span class="card-title">{{
          subredditInfo.data.display_name_prefixed
        }}</span>
        <span class="card-title">{{ subredditInfo.data.title }}</span>
        <p>{{ subredditInfo.data.public_description }}</p>
        <small
          >{{ subredditInfo.data.active_user_count }} of
          {{ subredditInfo.data.subscribers }} subscribers are here</small
        >
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs } from "vue";
export default {
  props: {
    subredditInfo: Object
  },
  // setup(props) {
  //   const { subredditInfo } = toRefs(props);
  //   console.log('props:::', subredditInfo);
  //   return {
  //     subredditInfo
  //   };
  // }
};
</script>
<style lang=""></style>
