<template lang="">
  <div class="modal-btn" v-if="!authState.isLogin.value">
    <button data-target="login" class="btn modal-trigger mr">
      LOGIN
    </button>
    <button data-target="register" class="btn modal-trigger">
      SIGN IN
    </button>
  </div>
  <div v-else>
    WELCOME {{ authState.loginResponse.value.username }}
    <button class="btn" @click="logout">LOGOUT</button>
  </div>
  <LoginModal :login="login" />
  <RegisterModal :register="register" />
</template>
<script>
import LoginModal from "@/components/Auth/LoginModal.vue";
import RegisterModal from "@/components/Auth/RegisterModal.vue";
import { login, register, authState, logout } from "@/components/NavBar/auth.ts";
export default {
  components: {
    LoginModal,
    RegisterModal,
  },
  setup() {
    return {
      authState,
      login,
      register,
      logout
    };
  }
}
</script>
<style lang="css">
.mr {
  margin-right: 0.5rem;
}
</style>