<template>
  <div>
    <Post :게시글 = "게시글[i]" v-for="(a,i) in 게시글" :key="i"/>
    <!-- <Post :게시글 = "게시글[1]"/>
    <Post :게시글 = "게시글[2]"/> -->
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  components : {
    Post,
  },
  props : {
    게시글 : Array,
  }
}
</script>

<style>
  
</style>