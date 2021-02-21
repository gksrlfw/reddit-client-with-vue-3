<template lang="">
  <div id="login" class="modal">
    <div class="modal-content">
      <h4>
        LOGIN<button class="btn-flat right">
          <i class="material-icons" @click="closeModal('#login')">close</i>
        </button>
      </h4>
      <p class="content">We don't have any policy :D</p>
      <div class="social-login">
        <button class="btn">CONTINUE WITH GOOGLE</button>
        <button class="btn apple-login">CONTINUE WITH APPLE</button>
      </div>
      <div class="divider divide"></div>

      <form class="local-login">
        <div class="input-field col s6">
          <input type="text" class="validate" v-model="email" />
          <label for="email">email</label>
        </div>
        <div class="input-field col s6">
          <input
            type="password"
            class="validate"
            v-model="password"
            autocomplete="on"
          />
          <label for="password">password</label>
        </div>
      </form>
    </div>
    <!-- social login -->
    <div class="modal-footer">
      <a class="waves-effect waves-green btn-flat" @click="login(email, password); closeModal('#login');">LOGIN</a>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { initModal, closeModal } from "@/components/Materialize/Modal";

export default {
  props: {
    login: Function
  },
  setup() {
    const email = ref("");
    const password = ref("");
    onMounted(() => initModal("#login"));
  

    return {
      email,
      password,
      closeModal
    };
  }
};
</script>
<style lang="scss">
.content {
  margin-bottom: 3rem;
}
.social-login {
  display: flex;
  flex-direction: column;
  width: 50%;
  button {
    margin-bottom: 1rem;
  }
  .apple-login {
    margin-bottom: 3rem;
  }
}
.divide {
  width: 50%;
}
.local-login {
  margin-top: 3rem;
  width: 50%;
}
</style>
