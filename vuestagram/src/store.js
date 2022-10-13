import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            name : 'kim',           //데이터 보관 장소
            age : 20,
            likes : 30,
            좋아요클릭 : false,
            more:{},
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
        setMore(state, data){
            state.more=data
        },
    },
    actions :{      // ajax하는 곳, 혹은 오래 걸리는 작업들 
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=>{
                console.log(a.data)
                context.commit('setMore', a.data)
            })
        },
    },
})
export default store;
//하위 컴포넌트 전송은 props
//상위 컴포넌트 전송은 custom event $ or mitt
//Vuex 모든 컴포넌트들을 공유 가능 한 js파일에 데이터를 몰아넣음 
//컴포넌트, 데이터 많을 때 Vuex 사용 / 그 외엔 props 쓰는 게 더 코드가 짧음 

//main.js에 import
//모든 컴포넌트에서 사용 가능

//action 더보기
//1. dispatch('getData')
//2. ajax로 데이터를 가져오는데 
//3. mutations를 이용해서 state에 저장 
//결론 - ajax는 actions에서 state변경은 mutations에서 사용 