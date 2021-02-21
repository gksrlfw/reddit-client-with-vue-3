<template lang="">
  <div id="register" class="modal bl">
    <div class="modal-content">
      <h4>
        SIGN UP<button class="btn-flat right">
          <i class="material-icons" @click="closeModal('#register')">close</i>
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
          <input id="emailR" type="text" class="validate" v-model="email" />
          <label for="emailR">email</label>
        </div>
        <div class="input-field col s6 input-bottom">
          <input
            id="passwordR"
            type="password"
            class="validate"
            v-model="password"
            autocomplete="on"
          />
          <label for="passwordR">password</label>
        </div>
        <div class="input-field col s6 input-bottom">
          <input id="usernameR" type="text" class="validate" v-model="username" />
          <label for="usernameR">username</label>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <a class="btn-flat" @click="onRegister(email, password, username)">SIGN UP</a>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, toRefs } from "vue";
import { initModal, closeModal } from "@/components/Materialize/Modal";

export default {
  props: {
    register: Function
  },
  setup(props) {
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const { register } = toRefs(props);

    onMounted(() => initModal("#register"));

    async function onRegister(email, password) {
      try {
        const isRegisterError = await register.value(email, password, username);
        if(isRegisterError.value) return alert('Register failed');
        closeModal("#register");
      }
      catch(err) {
        console.error(err);
      }
    }

    return {
      email,
      password,
      username,
      closeModal,
      onRegister
    };
  }
};
</script>
<style lang="scss">
.input-bottom {
  border-bottom: 1px solid rgb(190, 196, 183);
}
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
