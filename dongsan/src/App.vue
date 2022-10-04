<template>
     <!-- 반복문으로 메뉴 만들기 
      <태그 v-for = " 작명 in 몇회?(데이터도 넣을 수 있음) :key="작명">
      :key=""용도 - 반복문 쓸 때 꼭 써야됨, 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 
      array/object 자료형 집어넣기 가능, 자료안의 데이터 갯수만큼 반복됨 
      작명한 변수는 데이터안의 자료가 됨 -->
     <div class="menu">
      <a v-for="a in 메뉴" :key="a">{{a}}</a> <!-- 변수 작명은 2개까지 가능,(a,i) 왼쪽변수는 array내의 데이터, 오른쪽변수는 1씩 증가하는 정수 -->
    </div>
  <div v-for="(a,i) in products" :key="i">
    <h4 >{{products[i]}}</h4>  <!-- html 속성도 데이터바인딩 가능 :속성="데이터이름"-->
    <p> 60 만원</p>
  </div>
  <!-- <div>
    <h4>{{products[1]}}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>80 만원</p>
  </div> -->


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
      메뉴 : ['home', 'shop', 'about'],
      //데이터는 object 자료로 저장
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
}
.menu{
  background:  darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding : 10px;
  font-size: 20px;
}
</style>
