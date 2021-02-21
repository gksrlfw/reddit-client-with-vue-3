<template lang="">
  <div class="lighten-5">
    <span class="black-text score">
      <button data-target="login" class="btn-flat modal-trigger">
        <i class="material-icons">arrow_drop_up</i>
      </button>
      {{ vote }}
      <button data-target="login" class="btn-flat modal-trigger">
        <i class="material-icons">arrow_drop_down</i>
      </button>
    </span>
  </div>
  <!-- <LoginModal />
  <RegisterModal /> -->
</template>
<script>
import { toRefs, computed } from 'vue';
// import LoginModal from "@/components/Auth/LoginModal.vue";
// import RegisterModal from "@/components/Auth/RegisterModal.vue";
export default {
  components: {
    // LoginModal,
    // RegisterModal
  },
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const { post } = toRefs(props);
    const vote = computed(() => {
      let str = post.value.score.toString();
      if(str.length > 3) {
        str = str.slice(0, str.length-2);
        str = `${str.slice(0, str.length-1)}.${str.slice(str.length-1)}`;
        return `${str}k`;
      }
      return post.value.score
    });
    return {
      vote
    }
  }
};
</script>
<style lang=""></style>
