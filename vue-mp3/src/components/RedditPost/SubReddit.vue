<template>
  <div class="subreddit">
    <div v-if="postState && posts">
      <div class="progress light-blue lighten-4" v-if="postState.loading">
        <div class="indeterminate"></div>
      </div>
      <div class="card red" v-if="postState.error">
        <div class="card-content white-text">
          <span class="card-title">{ postState.error }</span>
        </div>
      </div>
      <div class="row">
        <RedditPost v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import RedditPost from "./RedditPost.vue";
import { computed } from "vue";
import usePosts from "../../hooks/usePosts";
export default {
  props: {
    name: String
  },
  components: {
    RedditPost
  },
  setup(props) {
    const postState = usePosts(props.name);
    const posts = computed(() =>
      // filter out nsfw posts (over18)
      postState.data
        .filter(child => !child.data.over_18)
        .map(child => child.data)
    );

    return {
      postState,
      posts
    };
  }
};
// render() {
//     const {postState, posts} = this;
//     return (
//         <div class="main">
//             <div>
//             {postState.loading && (
//                 <div class="progress light-blue lighten-4">
//                     <div class="indeterminate"></div>
//                 </div>
//             )}
//             {postState.error && (
//                 <div class="card red">
//                     <div class="card-content white-text">
//                     <span class="card-title">{ postState.error }</span>
//                     </div>
//                 </div>
//             )}
//             <div class="row">
//                 {posts.map(post => {
//                     <RedditPost key={post.id} post={post} />
//                 })}
//             </div>
//             </div>
//         </div>
//     )
// }
</script>
<style>
.subreddit {
  font-family: "Comic Sans";
}
</style>
