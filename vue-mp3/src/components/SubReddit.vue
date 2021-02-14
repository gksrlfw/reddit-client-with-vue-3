// 1:52:21
<template>
  <div class="subreddit">
    <div>
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
<script lang="jsx">
import RedditPost from "../components/RedditPost.vue";
export default {
    props: {
        postState: Object,
        posts: Object
    },
    components: {
        RedditPost
    },

}
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
