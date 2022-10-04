<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    직방
    <h4 :style="font">{{products[0]}}</h4>  <!-- html 속성도 데이터바인딩 가능 :속성="데이터이름"-->
    <p> {{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>{{ price2 }}만원</p>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>{{ price3 }}만원</p>
  </div>
</template>

<script>


export default {
//데이터 바인딩
//js 데이터를 html에 넣는 문법
//1. html 하드코딩을 해놓으면 나중에 변경이 어려움 
//2. 실시간 자동 렌더링 기능을 사용하기 위해 데이터 보관 
// - 실시간 자동 렌더링 기능 : 데이터를 변경하면 관련된 html에도 실시간으로 반영됨, 웹앱같은 것을 만들 수 있음 
//3. 자주 변경되는 데이터 위주로 저장해서 뺴 쓰기 
  name: 'App',
  data(){
    return{
      //데이터는 object 자료로 저장
      price1 : 80,
      price2 : 70, 
      price3 : 60,
      font : 'color:blue',
      products : ['역삼동원룸', '천호동원룸','마포구원룸']
    }
  },
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
