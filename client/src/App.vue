<template>
  <NavBar :isLogin="authState.isLogin"/>
  <router-view class="container" />
  <TopButton />
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import TopButton from "@/components/TopButton/TopButton.vue";
import AuthStore from "@/store/AuthStore.ts";
import { onMounted, watch } from 'vue';

export default {
  components: {
    NavBar,
    TopButton
  },
  setup() {
    const authStore = new AuthStore();
    const authState = authStore.getAuthState();
    onMounted(async () => {
      await authStore.login({ email: 'ads', password: 'ads' });
      console.log(authState.isLogin.value);
    });
    
    watch(() => authState.isLogin.value, () => {
      console.log('watch', authState.isLogin);
    });
    return {
      authState
    }
  }
};
</script>
<style lang="scss">
* {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // width: 100vw;
  // height: 100vh;
  // overflow: hidden;
  font-weight: bold;
}
#app {
  width: 100%;
  height: 100%;
  // overflow-y: scroll;
}
.half {
  width: 70%;
  margin: 0 auto;
}
.fixed {
  position: sticky;
  top: 0;
}
</style>
