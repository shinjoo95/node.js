<template>
  <div>
    <!-- Vue3 버전부터 v-if 와 v-for 한 곳에 못씀-->
    <div v-if="step == 0">
      <Post :게시글="게시글[i]" v-for="(a, i) in 게시글" :key="i" />
    </div>
    <!-- 
    <Post :게시글 = "게시글[1]"/>
    <Post :게시글 = "게시글[2]"/> -->

    <!-- tab 만들기 -->
    <!-- 필터선택페이지 
      step이 0이면 <Post> x3 
      step이 1이면 필터 선택화면
      step이 2이면 글쓰는 화면이 보여야됨-->
    <div v-if="step == 1">
      <div
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="filters">
        <FilterBox :이미지="이미지" :필터="필터" v-for="필터 in 필터명" :key="필터">
          {{필터}}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  data() {
    return {
      필터명: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    게시글: Array,
    step: Number,
    이미지: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>