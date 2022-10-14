<!-- 구성 
  상단 : app.vue  본문 : container.vue (+post.vue) 하단 : 메뉴
  더보기버튼 : 서버에서 더보기 게시물을 가져옴 그 데이터를 html로 보여줄것 -> ajax 
  GET요청 : 데이터를 서버에서 가져올 때 / POST 요청 : 서버로 데이터를 내보낼 때 
  GET or POST 요청하면 브라우저가 새로고침 됨 새로고침 없이 실행하고 싶을 땐 ajax 사용 
  ajax 요청하려면 1. axios 라이브러리 사용 / 2. fetch 함수 사용 -->
<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <!-- 글 발행 기능 
        발행버튼을 누르면 this.게시물에 {내가 작성한 글} 넣기 -->
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- 
  Vuex
  store.js에 있는 state 꺼내 쓰는 방법
  <h4>안녕 {{ $store.state.name }}</h4>
  store.js에 있는 state 변경하는 방법
  <button @click="$store.commit('이름변경')">버튼</button> 
  (Vuex 국룰) 컴포넌트 안에서 직접 수정하기 금지
  수정하고 싶으면 미리 store.js에 수정방법을 정의해두고 컴포넌트에서 소환해서 수정해야됨 
  버튼을 누르면 state를 '박'으로 변경 (store.js)
  1. store.js에 state 수정 방법 정의 / 2. 수정하고 싶으면 store.js에 부탁  $store.commit(함수명)
  장점: state 변경은 store.js만 함, state가 이상하면 store.js만 확인하면 됨 
  <p>나이 {{ $store.state.age }}</p>
  <button @click="$store.commit('나이증가',10)">버튼</button>  10 은 데이터를 보내는 곳 -->

  <!-- Vuex - action : more 기능 추가하기 
    action 함수를 불러와주는 dispatch
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <!-- mapstate -->
  <!-- <p>{{name}} {{age}} {{likes}}</p> -->

  <Container
    @write="작성글 = $event"
    :게시글="게시글"
    :step="step"
    :이미지="이미지"
  />


  <!-- 더보기 버튼을 누르면 
    1. 서버에서 추가 게시물을 가져옴
    2. 그걸 <Post>로 보여줌 -->
  <button v-if="step == 0" @click="more">더보기</button>

  <!-- 이미지 업로드 : FileReader(), URL.createObjectURL() -->
  <div class="footer">
    <ul class="footer-button-plus">
      <!-- 파일 업로드시 코드 실행하려면 @change="", input 여러개 다룰라면 multiple, 
      이미지만 선택할 수 있게면(이미지만 보여주세요) accept="image/*" -->
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- 
  tab 만들기 
    동적 UI 만드는 법
    1. UI 현재 상태를 데이터로 만들기
    2. 상태에 따라 HTML이 어떻게 보일지 
  <div v-if="step ==0">내용0</div>
  <div v-if="step ==1">내용1</div>
  <div v-if="step ==2">내용2</div> -->
  <button @click="step = 0">게시글</button>
  <button @click="step = 1">필터선택</button>
  <button @click="step = 2">댓글</button>
  <div style="margin-top: 50px"></div>
</template>

<script>
import Container from "./components/Container.vue";
import postdata from "./assets/postdata.js";
import axios from "axios";
import {mapMutations, mapState} from 'vuex'
axios.get();

export default {
  name: "App",
  data() {
    return {
      작성글: "",
      게시글: postdata,
      더보기: 0,  
      step: 3, //현재 페이지 상태 저장
      이미지: "", //변수 공간(url)
      선택필터: "",
      카운터:0,
    };
  },
  mounted() {
    this.emitter.on("필터클릭", (a) => {
      this.선택필터 = a;
    });
  },
  components: {
    Container,
  },
  methods : { //vuex mutations 한번에 꺼내쓰려면 ...mapMutation([])
    ...mapMutations(['setMore', '좋아요'])
  },
  computed:{    //꼭 return이 있어야됨 
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age','likes']),    //vuex state 한번에 꺼내 쓰려면
    ...mapState({ 작명 : 'name',})            //object 로 state 작명가능 
  },
  // computed : {
  //   //methods vs computed
  //   //methods 함수는 사용할 때마다 실행됨
  //   //computed 함수는 사용해도 실행이 되지 않음, 처음 실행하고 값을 간직함 
  //   now2(){
  //     return new Date() //현재시각
  //   },
  // },
  // methods: {
  //   now(){
  //     return new Date() //현재시각
  //   },
    publish() {
      var 내게시물 = {
        name: "Shin Joo",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 150,
        date: "May 15",
        liked: false,
        content: this.작성글,
        filter: this.선택필터,
      };
      this.게시글.unshift(내게시물); //왼쪽의 array에 자료를 넣는 함수 unshift
      this.step = 0;
    },
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]); //임시 url을 만들어 업로드한 이미지를 넣어줌
      //0과 1로 이루어진 binary 데이터를 다룰 땐 BLOB이라는 object에 담아서 다룸
      console.log(url);
      this.이미지 = url;
      this.step = 1; //업로드 후 다음 페이지로 이동
    },
    more() {
      axios
        //.post() : post요청
        //.catch() : 실패 시 실행할 코드
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`) //백틱 주의
        .then((결과) => {
          //arrow function을 사용해야 this 사용이 간편함
          console.log(결과.data); //요청 성공 시 실행할 코드
          this.게시글.push(결과.data);
          this.더보기++;
        })
        .catch(() => {
          console.log("GET 요청을 실패했습니다.");
        });
    },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
  text-align: center;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

<!-- 모바일 환경으로 만들어주는 pwa
  pwa 모바일 화면으로 구성시켜줌 
  vue add pwa  -> registerServiceWorker 파일 생성
  npm run build -> dist 파일 생성
  1. manifest.json 앱 정보 담는 파일
  2. service-worker.js 오프라인에서도 파일들을 사용 가능 
  - 웹페이지 구동에 필요한 html css img를 하드에 저장시켜놓음
  - 하드에 있는 정보들을 안내함 -->