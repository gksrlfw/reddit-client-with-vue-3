<template lang="">
  <div class="lighten-5">
    <span class="black-text score">
      <button data-target="login" class="btn-flat modal-trigger">
        <i class="material-icons">arrow_drop_up</i>
      </button>
      {{ post.score }}
      <button data-target="login" class="btn-flat modal-trigger">
        <i class="material-icons">arrow_drop_down</i>
      </button>
    </span>
  </div>
  <LoginModal />
  <RegisterModal />
</template>
<script>
import LoginModal from "@/components/Auth/LoginModal.vue";
import RegisterModal from "@/components/Auth/RegisterModal.vue";
export default {
  components: {
    LoginModal,
    RegisterModal
  },
  props: {
    post: {
      type: Object
    }
  }
};
</script>
<style lang=""></style>
