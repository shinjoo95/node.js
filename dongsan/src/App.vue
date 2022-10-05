<template>

    <!-- Modal.vue 모달창 컴포넌트 만들기 (props)
     애니메이션효과 주기  -->
    <transition name="fade">
    <!--<자식 :데이터이름 = '데이터이름'/> -->
    <Modal :oneroom = 'oneroom' :click='click' :modalOn='modalOn'
    @closeModal = "modalOn =false"/>
    </transition>
     <!-- 반복문으로 메뉴 만들기 
      <태그 v-for = " 작명 in 몇회?(데이터도 넣을 수 있음) :key="작명">
      :key=""용도 - 반복문 쓸 때 꼭 써야됨, 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 
      array/object 자료형 집어넣기 가능, 자료안의 데이터 갯수만큼 반복됨 
      작명한 변수는 데이터안의 자료가 됨 -->
     <div class="menu">
      <a v-for="a in 메뉴" :key="a">{{a}}</a> <!-- 변수 작명은 2개까지 가능,(a,i) 왼쪽변수는 array내의 데이터, 오른쪽변수는 1씩 증가하는 정수 -->
    </div>

    <!-- 배너만들기 Discount.vue -->
    <Discount/> 

    <!-- 정렬버튼 만들기 -->
    <!-- [3,5,2].sort() -> 2,3,5 : 가나다순 정렬 -->
    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <!-- 컴포넌트 만들기 Card.vue 
    @click 이벤트를 컴포넌트에 적용할 시 이벤트 버블링 현상이 발생함 (상위 요소까지 포함됨 )
    부모 요소의 데이터를 바꿀 수가 없으니 메세지를 호출해서 적용시킴
    $evnet 자식이 보낸 데이터는 이벤트 변수에 담겨있음  -->
    <Card @openModal="modalOn = true; click = $event" 
    :room='oneroom[i]' v-for='(room,i) in oneroom' :key='room'/>


</template>

<script>
import data from './data.js';
import theDiscount from './Discount.vue';
import theModal from './Modal.vue';
import theCard from './Card.vue';



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
      roomOrigin : [...data],  //데이터 카피본, 별개의 사본  
      click : 0,
      oneroom : data,       //데이터 원본
      modalOn : false,
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
    sortBack(){
      // this.oneroom = this.roomOrigin;    //값을 공유해주세요라는 뜻임 
      this.oneroom = [...this.roomOrigin];  //복사본으로 만들어 사용
    },
    priceSort(){
      this.oneroom.sort(function(a,b){
        return a.price - b.price
      //sort()하면 원본이 변형됨 , Map() filter()등은 원본을 보존해줌
      }) 
    }
  },
  components: {
    Discount: theDiscount,
    Modal: theModal,
    Card: theCard,
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
.discount{
  background: #eee;
  padding : 10px;
  margin: 10px;
  border-radius: 5px;
}
/** vue 애니메이션 효과 주기 (띄울때) */
.fade-enter-from{         /* 시작 */
  opacity: 0;
}
.fade-enter-active{      /* transition */
  transition: all 1s;
}
.fade-enter-to{          /* 끝 */
  opacity: 1;
}
/** vue 애니메이션 효과 주기 (닫을 때) */
.fade-leave-from{         /* 시작 */
  opacity: 1;
}
.fade-leave-active{      /* transition */
  transition: all 1s;
}
.fade-leave-to{          /* 끝 */
  opacity: 0;
}

</style>
