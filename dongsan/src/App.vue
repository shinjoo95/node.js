<template>
  <!-- 모달창 만들기
    동적인 UI만드는 법 
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 
    조건식 v-if 조건식이 참일 때만 html을 보여줌 
    v-if="조건식" v-else-if v-else -->
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <h4>{{oneroom[click].title}}</h4> <!-- 사용자가 누른 상품 번호로 -->
        <p>{{oneroom[click].content}}</p>
        <button @click="modal=false">닫기</button>
      </div>
    </div>
     <!-- 반복문으로 메뉴 만들기 
      <태그 v-for = " 작명 in 몇회?(데이터도 넣을 수 있음) :key="작명">
      :key=""용도 - 반복문 쓸 때 꼭 써야됨, 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 
      array/object 자료형 집어넣기 가능, 자료안의 데이터 갯수만큼 반복됨 
      작명한 변수는 데이터안의 자료가 됨 -->
     <div class="menu">
      <a v-for="a in 메뉴" :key="a">{{a}}</a> <!-- 변수 작명은 2개까지 가능,(a,i) 왼쪽변수는 array내의 데이터, 오른쪽변수는 1씩 증가하는 정수 -->
    </div>

  <!-- <div v-for="(a,i) in products" :key="i">
    <h4 >{{a}}</h4>           //html 속성도 데이터바인딩 가능 :속성="데이터이름"
    <p> 60 만원</p>
  </div> -->
  <div v-for="(a,i) in oneroom" :key="i">
    <!-- html 태그안의 속성 데이터바인딩은 :어쩌꾸
          html 태그안의 내용 데이터바인딩은 {{어쩌구}}-->
    <img :src="a.image" class="room-img">
    <h4 @click="modal = true; click = i">{{a.title}}</h4>
    <p>{{a.price}}원</p>
    <!-- 이벤트 핸들러 html 클릭시 코드 실행하는 법
          v-on:click="", @click=""
          여러가지 이벤트 사용가능 @mouseover,-->
    <!-- <button @click="신고수[0]++">허위매물신고버튼</button> <span>신고수 : {{신고수[0]}}</span>   -->
  </div>
  <!--위 반복문으로 변경으로 주석처리
    <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4  @click="modal = true">{{products[1]}}</h4>
    <p>80 만원</p>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4  @click="modal = true">{{products[2]}}</h4>
    <p>80 만원</p>

  </div> -->


</template>

<script>
import data from './data.js';

export default {
//데이터 바인딩
//js 데이터를 html에 넣는 문법
//1. html 하드코딩을 해놓으면 나중에 변경이 어려움 
//2. 실시간 자동 렌더링 기능을 사용하기 위해 데이터 보관 
// - 실시간 자동 렌더링 기능 : 데이터를 변경하면 관련된 html에도 실시간으로 반영됨, 웹앱같은 것을 만들 수 있음 
//3. 자주 변경되는 데이터 위주로 저장해서 뺴 쓰기 
  name: 'App',
  data(){
    //state UI의 상태를 저장해주는 곳 
    return{
      click : 0,
      oneroom : data,
      modal : false,
      신고수 : [0,0,0],
      메뉴 : ['home', 'shop', 'about'],
      //데이터는 object 자료로 저장
      font : 'color:blue',
      products : ['역삼동원룸', '천호동원룸','마포구원룸']
    }
  },
  //vue에서 함수를 만들고 싶으면
  //methods:{함수(){}}
  //함수 안에서 데이터를 쓸 땐 this.데이터명 
  methods : {
    increase(){
      this.신고수 += 1;
    },
    함수2(){

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
.room-img{
  width: 100%;
  margin-top: 40px;
}
body{
  margin: 0;
}
div{
  box-sizing:  border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: (0,0,0,0.5);
  position: fixed;
  padding: 20px
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
