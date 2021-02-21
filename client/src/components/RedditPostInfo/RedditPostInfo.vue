<template>
  <div class="card" v-if="!subredditInfo.error && !subredditInfo.loading">
    <div class="card-image" v-if="subredditInfo?.data?.banner_img">
      <img :src="subredditInfo.data.banner_img" alt="" />
      <span class="card-title">{{ subredditInfo.data.display_name_prefixed }}</span>
    </div>
    <div class="card-content banner">
      <div class="icon" v-if="subredditInfo.data.icon_img">
        <img :src="subredditInfo.data.icon_img" class="circle" />
      </div>
      <div>
        <span class="card-title">{{ subredditInfo.data.title }}</span>
        <p>{{ subredditInfo.data.public_description }}</p>
        <small>
          {{ activeUser }} of
          {{ subscribers }} subscribers are here
        </small>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, computed } from "vue";

export default {
  props: {
    subredditInfo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { subredditInfo } = toRefs(props);
    const subscribers = computed(() => {
      let str = subredditInfo.value.data.subscribers.toString();
      if(str.length > 3) {
        str = str.slice(0, str.length-2);
        str = `${str.slice(0, str.length-1)}.${str.slice(str.length-1)}`;
        return `${str}k`;
      }
      return subredditInfo.value.data.subscribers;
    });
    const activeUser = computed(() => {
      let str = subredditInfo.value.data.active_user_count.toString();
      if(str.length > 3) {
        str = str.slice(0, str.length-2);
        str = `${str.slice(0, str.length-1)}.${str.slice(str.length-1)}`;
        return `${str}k`;
      }
      return subredditInfo.value.data.active_user_count;
    });
    return {
      subscribers,
      activeUser
    }
  }
};
</script>
<style lang=""></style>
