<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "vant";

const router = useRouter();

const checked = ref("1");

const input1 = ref("");

const input2 = ref("");

const goBack = () => {
  router.back();
};

const certification = () => {
  showToast("认证成功");
  console.log(input1.value, input2.value);
  router.back();
};
</script>

<template>
  <div class="real">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>实名认证</span>
      <span></span>
    </div>
    <div class="box">
      <div class="div1">
        <span>真实姓名</span
        ><input type="text" placeholder="请输入真实姓名" v-model="input1" />
      </div>
      <div class="div2">
        <span>证件号码</span
        ><input type="text" placeholder="请输入证件号码" v-model="input2" />
      </div>
      <div>
        <p>
          注:
          请确认本人身份信息，实名认证成功后，身份信息与此账号唯一绑定，不可更换他人。
        </p>
      </div>
      <div>
        <van-radio-group v-model="checked" shape="square" icon-size="10px">
          <van-radio name="1"
            >已阅读并同意<a>《实名认证服务协议》</a></van-radio
          >
        </van-radio-group>
      </div>
      <div>
        <button @click="certification">同意协议并认证</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.real {
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
  .van-radio {
    font-size: 12px;
    a {
      color: #349afe;
    }
  }
  .box {
    padding: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 12px;
      padding: 15px 0px;
    }
    .div1 {
      width: auto;
      height: auto;
      font-size: 13px;
      input {
        width: auto;
        height: 30px;
        outline: none;
        padding-left: 15px;
        margin-left: 10px;
        font-size: 13px;
        color: #666;
      }
    }
    .div2 {
      width: auto;
      height: auto;
      margin-top: 20px;
      font-size: 13px;
      input {
        width: auto;
        height: 30px;
        outline: none;
        padding-left: 15px;
        margin-left: 10px;
        font-size: 13px;
        color: #666;
      }
    }
    button {
      margin-top: 20px;
      width: 160px;
      height: 35px;
      background: #fcd535;
      border: 0;
      color: #000;
      font-size: 12px;
      border-radius: 2px;
    }
  }
}
</style>