//페이지 나눌 때 사용하는 라우터
//페이지를 나누고 싶으면 우선 컴포넌트로 만들어야됨
//{}하나 만들고 props 전송은 <router-view>에 하면 됨 
import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
const routes = [
  {
    //detail/아무문자  url :파라미터 문법 
    //파라미터 업그레이드 가능 :id(\\d+) 소괄호 안에 정규식 입력가능
    //필요하면 vue-router 4 참고 
    path: "/detail/:id",            
    component : Detail,
    // nested routes 만드는법 /detail/author
    // children :{} 안에 만들기 -> 어디서 보여줄지 정하기 <router-view>
    // children : [
    //     {
    //         path : "author",         
    //         component : Author.vue
    //     },
    // ]
  },
  {
    path: "/list",                  //이 경로로 들어오면 아래 컴포넌트 실행 
    component: List,
  },
  {
    path: "/",
    component: Home,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 