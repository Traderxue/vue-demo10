<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="security">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>安全中心</span>
      <span></span>
    </div>
    <div class="banner">
      <img src="http://127.0.0.1:5173/security.png" alt="" />
    </div>
    <div class="box">
      <h3>储备金证明</h3>
      <span
        >验证JWT是否按用户资产至少1:1的比例做足储备，请注意，JWT的绝大多数公司资产均储存在单独的钱包中，不计入存储保证金的证明计算。</span
      >
      <button>查看报告</button>
    </div>
    <div class="last">
      <img src="http://127.0.0.1:5173/security_1.png" alt="" />
      <div class="context">
        <span>什么是储备金证明？</span>
        <p>
          当我们说储备金证明时，我的特指的是我们为用户托管的哪些资产。这意味着我们正在
          展示证明，意味着我们所有的用户资产1:1的资产以及一些储备金
        </p>
      </div>
    </div>
    <div class="last_1">
      <div>
        <span>如何验证我们的储备金?</span>
        <p>
          为验证我们以1:1的比例持有的所有用户资产，我么建立并实施了默尔树，并允许人们在平台内验证其资产。每天用户将可用使用他们
          自己生成的摩尔哈希来 验证他们的资产持有量。
        </p>
      </div>
      <div>
        <img src="http://127.0.0.1:5173/security_2.png" alt="" />
      </div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.security {
  width: auto;
  height: auto;
  background: #f5f5f5;
  padding: 15px 15px 70px 15px;
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
  .banner {
    width: auto;
    height: 230px;
    margin: 20px 0px;
    img {
      width: 100%;
      height: 230px;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 30px;
    flex-direction: column;
    span {
      font-size: 13px;
      padding: 20px 0px;
    }
    button {
      width: 90px;
      height: 40px;
      border: 0;
      background: #fcd535;
      color: #000;
      font-size: 13px;
      border-radius: 2px;
      margin: 10px 0px;
    }
  }
  .last {
    width: auto;
    height: auto;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
    img {
      height: 100px;
      width: 160px;
    }
    span {
      font-size: 13px;
    }
    p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }
  .last_1 {
    width: auto;
    height: auto;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
    div{
      width: 50%;
      align-items: center;
    }
    img {
      height: 100px;
      width: 160px;
    }
    span {
      font-size: 13px;
    }
    p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }
}
</style>