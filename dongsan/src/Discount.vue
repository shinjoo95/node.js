<!-- component 만들기(할인배너)
    < + enter 뷰 템플릿 
    vue 파일을 따로 만든 다음에 축약할 html 넣기 
    name 속성 넣는 것이 일반 적임
    축약해둔 컴포넌트 쓰는 법 - vue파일을 import 해오고 components : {}에 등록한뒤 사용-->
    <template>
    <div class="discount">
        <h4>지금 결제하면 20% 할인</h4>
    </div>
    </template>
    
    <script>
    export default{
        name: 'theDiscount',
    }
    </script>
    
    <style>
    
    </style>

<!-- 컴포넌트를 왜 쓰는가 ? 
    1. 보다 깔끔한 코드 
    2. 재사용하기 용이함 
    3. 반복적으로 출현할 부분만 컴포넌트화 권장 -->