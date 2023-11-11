<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const goHome = () =>{
    router.push("/home")
}

const registerBtn = () =>{
    router.push("/register")
}
</script>

<template>
  <div class="login">
    <div class="header">
      <span class="material-symbols-outlined" @click="goHome"> arrow_back </span>
      <span></span>
    </div>
    <div class="box">
      <h3>登录</h3>
      <input type="text" placeholder="请输入用户名">
      <input type="password" placeholder="请输入密码">
      <div class="btn">
        <button class="login_btn">登录</button>
        <button class="register_btn" @click="registerBtn">注册</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login{
    width: auto;
    height: auto;
    padding: 15px;
    .header{
        width: auto;
        height: 25px;
        display: flex;
        justify-content: space-between;        
        align-items: center;
    }
    .box{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding-top: 160px;
        h3{
            font-size: 22px;
            padding-bottom: 15px;
        }
        input{
            width: 80%;
            padding-left: 15px;
            margin: 10px 0px;
            height: 35px;
            font-size: 14px;
        }
        .btn{
            width: auto;
            height: auto;
            display: flex;
            justify-content: space-around;
            button{
                width: 80px;
                height: 35px;
                margin: 10px;
                border: 0;
                font-size: 12px;
                background: #364f6b;
                color: #FFF;
                border-radius: 3px;
            }
        }
    }
}
</style>