<template lang="">
  <div id="login" class="modal bl">
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
        <div class="input-field col s6 input-bottom">
          <input id="emailL" type="text" class="validate" v-model="email" />
          <label for="emailL">email</label>
        </div>
        <div class="input-field col s6 input-bottom">
          <input
            id="passwordL"
            type="password"
            class="validate bl"
            v-model="password"
            autocomplete="on"
          />
          <label for="passwordL">password</label>
        </div>
      </form>
    </div>
    <!-- social login -->
    <div class="modal-footer">
      <a class="btn-flat right" @click="onLogin(email, password)">LOGIN</a>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, toRefs } from "vue";
import { initModal, closeModal } from "@/components/Materialize/Modal";

export default {
  props: {
    login: Function
  },
  setup(props) {
    const email = ref("");
    const password = ref("");
    const { login } = toRefs(props);
    onMounted(() => initModal("#login"));

    async function onLogin(email, password) {
      try {
        const isLoginError = await login.value(email, password);
        console.log('isLoginError', isLoginError, isLoginError.value);
        if(isLoginError.value) return alert('Login failed');
        closeModal("#login");
      }
      catch(err) {
        console.error(err);
      }
    }

    return {
      email,
      password,
      closeModal,
      onLogin
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
.bl {
  color: black;
}
</style>
