<script setup>
import { showToast } from "vant";
import { ref } from "vue";

const show = ref(false);

const tab = ref("30S");

const tabList = ref([
  {
    time: "30S",
    parcent: "40.00%",
  },
  {
    time: "60S",
    parcent: "50.00%",
  },
  {
    time: "120S",
    parcent: "60.00%",
  },
  {
    time: "180S",
    parcent: "80.00%",
  },
  {
    time: "300S",
    parcent: "100.00%",
  },
]);

const showPopup = (item) => {
  show.value = true;
};

const miningList = ref([
  {
    logo: "https://etherscan.io/token/images/tethernew_32.png",
    num: "100",
    income: "1.8%",
    cycle: "5",
  },
  {
    logo: "https://etherscan.io/token/images/tethernew_32.png",
    num: "1000",
    income: "3.8%",
    cycle: "10",
  },
  {
    logo: "https://etherscan.io/token/images/tethernew_32.png",
    num: "5000",
    income: "5.8%",
    cycle: "15",
  },
  {
    logo: "https://etherscan.io/token/images/tethernew_32.png",
    num: "10000",
    income: "12%",
    cycle: "50",
  },
]);

const closeProup = () => {
  show.value = false;
};

const changeTab = (time) =>{
  tab.value = time
}

const confirm = () =>{
  showToast('买入成功')
  show.value = false
}
</script>

<template>
  <div class="lock">
    <div class="box" v-for="(item, index) in miningList" :key="index">
      <div>
        <div><img :src="item.logo" alt="" /><span>USDT</span></div>
        <button @click="showPopup(item)">买入</button>
      </div>
      <div><span>起投数量</span><span>总收益率</span><span>周期</span></div>
      <div>
        <span>{{ item.num }}</span
        ><span>{{ item.income }}</span
        ><span>{{ item.cycle }}天</span>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      round
      style="width: 300px; height: 350px; padding: 15px"
    >
      <div class="popup">
        <div class="header">
          <span></span><span>确认订单</span
          ><span class="material-symbols-outlined" @click="closeProup">
            close
          </span>
        </div>
        <div><span>名称</span><span>BTC/USDT</span></div>
        <div><span>方向</span><span style="color: #e23e57;">买涨</span></div>
        <div><span>当前价</span><span>27945.15</span></div>
        <div class="tab">
          <button
            v-for="(item, index) in tabList"
            :key="index"
            :class="tab == item.time ? 'active' : ''"
            @click="changeTab(item.time)"
          >
            {{ item.time }} {{ item.parcent }}
          </button>
        </div>
        <div class="num">
          <span>买入数量:</span
          ><input type="text" placeholder="请输入购买数量" />
        </div>
        <p>账户余额: 100000.00 USDT</p>
        <div class="btn">
          <button @click="confirm">确认下单</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.lock {
  width: auto;
  height: auto;
  padding: 15px 0px 70px 0px;
  .box {
    background: #fbd033;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 0px;
      img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
      button {
        width: 70px;
        height: 30px;
        font-weight: 500;
        border: 0;
        background: #364f6b;
        color: #fff;
        border-radius: 3px;
        font-size: 12px;
      }
    }
    .van-overlay {
      background: rgb(0 0 0 / 22%);
    }
  }
  .popup {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      font-weight: 500;
    }
    .num{
      input{
        width: 70%;
        height: 30px;
        font-size: 12px;
        border: 0;
      }
    }
    p{
      font-weight: 500;
      padding-top: 10px;
      font-size: 12px;
    }
    .tab {
      button {
        border: 0;
        font-size: 12px;
        font-weight: 500;
        padding: 5px;
      }
      .active {
        background: #578af7;
        color: #fff;
      }
    }
    .btn{
      button{
        margin-top: 10px;
        width: 80%;
        height: 30px;
        margin: 0 auto;
        border: 0;
        background: #fbd033;
        border-radius: 3px;
      }
    }
  }
}
</style>