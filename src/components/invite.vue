<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useClipboard from "vue-clipboard3";
import { showToast } from "vant";

const { toClipboard } = useClipboard();

const router = useRouter();

const invite_num = ref("4561")

const invite_link = ref("http://www.baidi.com/4516")

const goBack = () => {
  router.back();
};

const copyInvite = async () =>{
  await toClipboard(invite_num.value)
  showToast('复制邀请码成功')
}

const copyLink = async () =>{
  await toClipboard(invite_link.value)
  showToast('复制邀请链接成功')  
}

const inviteFriend = async () =>{
  await toClipboard(invite_link.value)
  showToast('复制邀请链接成功')
}
</script>

<template>
  <div class="invite">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>邀请好友</span>
      <span></span>
    </div>
    <div class="banner">
      <img src="http://127.0.0.1:5173/invite_3.png" alt="" />
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#F5F5F5"
        text="邀请好友注册专属会员，可获得瓜分1000元的奖励"
      />
    </div>
    <div class="box">
      <h3>计划简介</h3>
      <p>
        邀请新用户完成注册、KYC及不低于<span>0.02BTC</span>的首次入金，即可获得<span>
          20USDT </span
        >的现金奖励; 30日内，被邀请用户持续活跃并活跃度达标,邀请人数再获得<span>
          90USDT</span
        >的现金奖励
      </p>
    </div>
    <div class="main">
      <div>
        <span>邀请码</span>
        <p>4516</p>
        <span class="material-symbols-outlined file" @click="copyInvite"> file_copy </span>
      </div>
      <div>
        <span>邀请链接</span>
        <p>http://www.baidi.com/4516</p>
        <span class="material-symbols-outlined file" @click="copyLink"> file_copy </span>
      </div>
      <div>
        <button @click="inviteFriend">立即邀请好友</button>
      </div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.invite {
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
  .banner {
    text-align: center;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    h3 {
      padding: 15px 0px;
    }
    p {
      font-size: 14px;
    }
    span {
      color: #00adb5;
      font-weight: 600;
      line-height: 5px;
      padding: 0px 15px;
    }
  }
  .main{
    display: flex;
    justify-content: space-around;    
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    div{
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 10px 0px;
      margin: 5px 0px;
      p{
        padding:0px 15px;
      }
      .file{
        font-size: 20px;
      }
      button{
        width: 120px;
        height: 30px;
        border-radius: 3px;
        border: 0;
        background: #fcd535;
        color: #000;
        font-size: 12px;
      }
    }
  }
}
</style>