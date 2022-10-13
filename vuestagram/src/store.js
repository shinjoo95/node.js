import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            name : 'kim',           //데이터 보관 장소
            age : 20,
            likes : 30,
            좋아요클릭 : false,
        }
    },
    mutations : {
        // 이름변경(state){            //state는 위 함수를 뜻함 
        //     state.name ='park'
        // },
        // 나이증가(state, data){
        //     state.age += data;
        // }
        좋아요(state){          //사진을 누르면 좋아요 +1 한번 더 누르면 -1
        if(state.좋아요클릭 ==false){
            state.likes++;
            state.좋아요클릭 = true;
        }else{
            state.likes--;
            state.좋아요클릭 = false;
        }
        },
    }
})
export default store;
//하위 컴포넌트 전송은 props
//상위 컴포넌트 전송은 custom event $ or mitt
//Vuex 모든 컴포넌트들을 공유 가능 한 js파일에 데이터를 몰아넣음 
//컴포넌트, 데이터 많을 때 Vuex 사용 / 그 외엔 props 쓰는 게 더 코드가 짧음 

//main.js에 import
//모든 컴포넌트에서 사용 가능