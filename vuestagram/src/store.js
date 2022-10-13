import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            name : 'kim'            //데이터 보관 장소
        }
    },
})
export default store;
//하위 컴포넌트 전송은 props
//상위 컴포넌트 전송은 custom event $ or mitt
//Vuex 모든 컴포넌트들을 공유 가능 한 js파일에 데이터를 몰아넣음 
//컴포넌트, 데이터 많을 때 Vuex 사용 / 그 외엔 props 쓰는 게 더 코드가 짧음 

//main.js에 import
//모든 컴포넌트에서 사용 가능