<template>
    <!-- html 태그안의 속성 데이터바인딩은 :어쩌꾸
        html 태그안의 내용 데이터바인딩은 {{어쩌구}}-->

    <!-- <div v-for="(a,i) in products" :key="i">
    <h4 >{{a}}</h4>               //html 속성도 데이터바인딩 가능 :속성="데이터이름"
    <p> 60 만원</p>   </div> -->

    <div>
        <img :src="room.image" class="room-img">
        <h4>{{room.title}}</h4>
        <p>{{room.price}}원</p>
    </div>
    <!-- 이벤트 핸들러 html 클릭시 코드 실행하는 법
          v-on:click="", @click=""
          여러가지 이벤트 사용가능 @mouseover,-->
    <!-- <button @click="신고수[0]++">허위매물신고버튼</button> <span>신고수 : {{신고수[0]}}</span>   -->

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
export default {
    name: 'theCard',
    props : {           
        room: Object,
    }
}
</script>

<style>

</style>