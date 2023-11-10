<script setup>
import { showToast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};

const sure = () => {
  showToast('绑定成功')
  router.back();
};
</script>

<template>
  <div class="yhk">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>银行卡</span>
      <span></span>
    </div>
    <div class="title">
      <p>请输入您的银行卡信息</p>
    </div>
    <div class="box">
      <div>
        <span>卡号</span><input type="text" placeholder="请输入银行卡号" />
      </div>
      <div>
        <span>卡类型</span><input type="text" placeholder="请输入开卡银行" />
      </div>
      <div>
        <span>手机号</span><input type="text" placeholder="请输入手机号" />
      </div>
      <div>
        <span>姓名</span><input type="text" placeholder="请输入持卡人姓名" />
      </div>
      <div><button @click="sure">确定</button></div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.yhk {
  width: auto;
  height: auto;
  background: #f5f5f5;
  padding: 15px;
  font-size: 15px;
  font-size: 14px;
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
  .title {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 600;
    padding: 0px 40px;
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px 40px;
    div {
      padding: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        border: 0;
        font-size: 13px;
        height: 30px;
        width: 80%;
        box-sizing: border-box;
        padding-left: 15px;
        border-bottom: 1px solid gray;
        background: #f5f5f5;
      }
      button {
        margin-top: 15px;
        width: 100%;
        height: 35px;
        background: #fcd535;
        border: 0;
        border-radius: 3px;
        font-size: 12px;
        color: #000;
      }
    }
  }
}
</style>