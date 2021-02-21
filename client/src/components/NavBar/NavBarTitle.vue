<template lang="">
  <h5 class="black-text title">
    <router-link
      :to="{
        name: 'Main',
        params: {
          subreddit: 'all'
        }
      }"
      >REDDIT CLIENT!</router-link
    >
  </h5>
</template>