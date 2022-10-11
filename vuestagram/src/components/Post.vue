<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{게시글.name}}</span>
    </div>
    <!-- :style="" 집어 넣을 때 object자료도 가능, 백틱기호로 문자 만들기 `문자${변수}문자`-->
    <div class="post-body" :style="{backgroundImage: `url(${게시글.postImage})` }"></div>      
    <div class="post-content">
      <p>{{게시글.likes}} Likes</p>
      <p><strong>{{게시글.name}}</strong> {{게시글.content}}</p>
      <p class="date">May 15</p>
    </div>
</div> 
</template>

<script>
export default {
    props : {
        게시글 : Array,
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>