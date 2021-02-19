<template>
  <div class="card red">
    <div class="card-content white-text">
      <span class="card-title">{{ error }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: String,
      default: ""
    }
  }
};
</script>
