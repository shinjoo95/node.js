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
        <!-- @change : 입력하고 커서를 다른데 찍으면 실행, @input : 입력할 때마다 실행 -->
        <input @input="month = $event.target.value">               <!-- $event는  e 파라미터랑 똑같은 역할-->
        <!--    v-model = "month" 위와 동일, 아래에다가 저장해주세요 -->
        <p> {{month}}개월 선택함 : {{oneroom[click].price * month}}원</p>
        <button @click="$emit('closeModal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name : 'TheModal',
    data(){               //유저가 <input>에 입력한 값을 데이터로 저장 
      return{
          month : 1,      //문자로 받고 싶을 땐 초기값을 문자로 설정해놓으면 됨, input에 입력한 것은 전부 문자자료형 
      }                   //자바스크립트는 자료형을 잘 다뤄서 문자형 숫자형 곱셈 잘 됨, v-model.number 숫자로 강제 변환 
    },
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

<!-- input  v-model -->