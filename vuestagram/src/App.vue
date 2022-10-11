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
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시글="게시글" :step="step"/>

  <!-- 더보기 버튼을 누르면 
    1. 서버에서 추가 게시물을 가져옴
    2. 그걸 <Post>로 보여줌 -->
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- tab 만들기 
    동적 UI 만드는 법
    1. UI 현재 상태를 데이터로 만들기
    2. 상태에 따라 HTML이 어떻게 보일지 
  <div v-if="step ==0">내용0</div>
  <div v-if="step ==1">내용1</div>
  <div v-if="step ==2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button>
  <div style="margin-top : 500px;"></div> -->
</template>

<script>
import Container from "./components/Container.vue";
import postdata from "./assets/postdata.js";
import axios from "axios";
axios.get();

export default {
  name: "App",
  data() {
    return {
      게시글: postdata,
      더보기: 0,
      step: 0, //현재 페이지 상태 저장 
    };
  },
  components: {
    Container,
  },
  methods: {
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
  },
};
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
