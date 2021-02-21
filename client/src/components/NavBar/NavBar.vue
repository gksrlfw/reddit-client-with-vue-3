<template>
  <nav class="">
    <div class="nav-wrapper grey lighten-1 ">
      <div class="container nav-bar half">
        <NavbarTitle />
        <NavbarSearch />
        <NavbarAuth />
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarSearch from "@/components/NavBar/NavBarSearch.vue";
import NavbarTitle from "@/components/NavBar/NavBarTitle.vue";
import NavbarAuth from "@/components/NavBar/NavBarAuth.vue";
export default {
  components: {
    NavbarSearch,
    NavbarTitle,
    NavbarAuth
  },
};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  padding: 0px;
  margin: 0px;
  margin-right: 2rem;
  padding-bottom: 0.3rem;
}
.input-box {
  padding-left: 2rem !important;
}
.form-box {
  height: 3rem;
  width: 50%;
  padding-left: 1rem;
}
.modal-btn {
  margin-left: 3rem;
}
@media screen and (max-width: 1300px) {
  .form-box {
    display: none !important;
  }
}
</style>
