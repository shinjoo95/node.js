<template>
<!-- 현재 url 정보는 $route에 담겨있음  
    $route.params하면 파라미터자리에 기입된 거 알려줌 -->
<!-- {{$route.params.id}} -->
  <h4>상세페이지입니다.</h4>
  <h5>{{블로그글[$route.params.id].title}}</h5>
  <p>{{블로그글[$route.params.id].content}}</p>
</template>

<script>
export default {
    props: {
        블로그글 : Array,
    }
}
</script>

<style>

</style>