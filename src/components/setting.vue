<script setup>
import { showToast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};

const sure = () => {
  showToast('编辑成功')
};

const changePwd = () =>{
  showToast('修改密码成功')
}
</script>

<template>
  <div class="setting">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>设置</span>
      <span></span>
    </div>
    <h3>账户信息</h3>
    <div class="banner">
      <div>
        <span>用户名</span><input type="text" placeholder="请编辑用户名" />
      </div>
      <div>
        <span>手机号码</span><input type="text" placeholder="请编辑手机号" />
      </div>
      <div><button @click="sure">确定</button></div>
    </div>
    <h3>修改密码</h3>
    <div class="banner">
      <div>
        <span>旧密码</span><input type="text" placeholder="请输入旧密码" />
      </div>
      <div>
        <span>新密码</span><input type="text" placeholder="请输入新密码" />
      </div>
      <div><button @click="changePwd">修改密码</button></div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.setting {
  width: auto;
  height: auto;
  background: #f5f5f5;
  padding: 15px;
  font-size: 15px;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      font-size: 22px;
    }
  }
  h3 {
    margin: 30px 0px;
  }
  .banner {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
      input {
        width: 60%;
        height: 30px;
        padding-left: 15px;
        font-size: 13px;
        border: 0;
        background: #f5f5f5;
        border-bottom: 1px solid gray;
      }
      button {
        width: 80%;
        margin: 10px auto;
        height: 35px;
        border: 0;
        background: #fcd535;
        border-radius: 3px;
        font-size: 12px;
        color: #000;
      }
    }
  }
}
</style>