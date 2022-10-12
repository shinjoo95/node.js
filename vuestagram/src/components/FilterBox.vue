

<template>
  <!-- cssgram 라이브러리 index.html에 링크 추가 -->
  <div
    :class="필터"
    class="filter-item"
    :style="`background-image:url(${이미지})`" >
    <!-- slot 부모 -> 자식 데이터 전송가능 / 태그안에 데이터바인딩할 때만 slot 사용가능 
        1. 자식은 구멍 뚫기
        2. 컴포넌트 태그 사이에 데이터 넣기 
        slot 여러개 사용하는 법
        1. <slot name ="a"></slot>
        2. <template v-slot:a>보낼거</template> 
        slot props
        1. <slot :자식데이터="자식데이터">
        2. 부모는 <template v-slot="작명"> 후에 {{작명.자식데이터}}-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "filterbox",
  props: {
    이미지: String,
    필터: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>