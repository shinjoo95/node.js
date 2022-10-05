<template>
    <!-- 모달창 만들기
    동적인 UI만드는 법 
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 
    조건식 v-if 조건식이 참일 때만 html을 보여줌 
    v-if="조건식" v-else-if v-else -->
    <div class="black-bg" v-if="modalOn == true">
      <div class="white-bg">
        <img :src="oneroom[click].image" style="width: 100%">
        <h4>{{oneroom[click].title}}</h4> <!-- 사용자가 누른 상품 번호로 -->
        <p>{{oneroom[click].content}}</p>
        <p>{{oneroom[click].price}}원</p>
        <button @click="$emit('closeModal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name : 'TheModal',
    props : {            //props:{데이터이름: 자료형이름}   자식은 props로 받은거 등록
        oneroom: Array,  //받아온 데이터의 자료형 이름을 대문자로, 디버깅용도
        click: Number,
        modalOn: Boolean, 
    }
}
</script>

<style>

</style>
<!-- {{데이터바인딩}}은 밑에 데이터가 있어야 가능함 
    데이터를 가져와서 사용하는 prop 속성 
    props로 자식에게 데이터 보내는 법 
    - 데이터를 보내고, 등록하고, 사용 
    (주의) props는 read-only 이기 떄문에 수정하면 안됨 
    데이터를 만들 땐 데이터 사용하는 곳들 중 최상위 컴포넌트에 만드는게 전송하기 편리함 -->

