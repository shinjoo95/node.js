<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="🔎" />
  <div class="post-header" v-for="(a,i) in follower " :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";  //모든 데이터를 reference data type으로 감싸야 실시간 반영가능 
import axios from 'axios';
export default {
    name: 'mypage',
    //composition API
    setup(){        //setup()엔아서 데이터 생성 조작 할수 있고 methods hook 등을 만들 수 있ㅇ므 
        let follower = ref([]);
        onMounted(() => {            //composition API에서 Lifecycle Hook 을 사용하기 위해
            axios.get('/follower.json').then((a) =>{
            follower.value = a.data //[{},{},{},{},{}]  //데이터 수정하려면 데이터.value
        })
    })
            return {follower}
    },
    date(){
        return{

        }
    }
}
</script>

<style>

</style>