<template>
  <div>
    <!--@click="$router.push('/detail/0')" 페이지 이동 라우터 함수 
    $route 는 현재 경로 / $router는 페이지 이동관련 기능 -->
    <h5 @click="$router.push('/detail/0')">{{블로그글[0].title}}</h5>
    <p>{{블로그글[0].date}}</p>
  </div>
  <div>
    <h5>{{블로그글[1].title}}</h5>
    <p>{{블로그글[1].date}}</p>
  </div>
  <div>
    <h5>{{블로그글[2].title}}</h5>
    <p>{{블로그글[2].date}}</p>
  </div>
  
</template>

<script>
export default {
    name:'list',
    props: {
        블로그글 : Array,
    }
}
</script>

<style>

</style>