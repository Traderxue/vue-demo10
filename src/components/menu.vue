<script setup>
import { ref } from "vue";

const navList = ref([
  {
    icon:"admin_panel_settings",
    title:"身份认证",
    path:""
  },
  {
    icon:"lock",
    title:"账户中心",
    path:""
  },
  {
    icon:"badge",
    title:"身份认证",
    path:""
  },
  {
    icon:"support_agent",
    title:"联系客服",
    path:""
  },
  {
    icon:"info",
    title:"关于我们",
    path:""
  },
])

const login = () =>{

}

const register = () =>{

  
}
</script>

<template>
  <div class="menu">
    <div class="header">
      <img src="http://127.0.0.1:5173/acatar.png" alt="" />
      <span>ID: 643153</span>
      <span>欢迎来到MTC</span>
    </div>
    <div class="box" v-for="(item,index) in navList" :key="index">
      <div>
        <span class="material-symbols-outlined admin"> {{item.icon}} </span><span>{{item.title}}</span>
      </div>
    </div>
    <div class="btn">
      <span @click="login">登录</span>
      <span @click="register">注册</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: auto;
  height: auto;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 100px;
  .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    img{
      width: 40px;      
      height: 40px;
      border-radius: 50%;
    }
    span{
      padding: 5px 0px;
    }
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 30px;
    div{
      display: flex;
      align-items: center;
      span{
        padding: 0px 10px;
      }
    }
  }
  .btn{
    margin-top: 25px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    color: #3280FC;
  }
}
</style>