<script setup>
import { init, dispose } from "klinecharts";
import { showToast } from "vant";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute()


const buypopup = ref(false);
const sellpopup = ref(false);

const tab_btn = ref("30S");

const type = ref("BTC");

const currentPrice = ref("24245");

const parcent = ref("+1.6%")

const up = ref(1)

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

const goBack = () => {
  router.back();
};

const buy = () => {
  buypopup.value = true;
};

const sell = () => {
  sellpopup.value = true;
};

const closePopup = () => {
  sellpopup.value = false;
  buypopup.value = false;
};

const changeTab = (item) => {
  tab_btn.value = item.time;
};

const buy_sure = () =>{
    showToast('下单成功')
    buypopup.value = false
}

const sell_btn = () =>{
    showToast('下单成功')
    sellpopup.value = false
}

let chart;
onMounted(() => {

type.value = route.query.type
currentPrice.value = route.query.price
parcent.value = route.query.parcent
up.value = route.query.up

  chart = init("kline");

  chart.applyNewData([
    {
      close: 4976.16,
      high: 4977.99,
      low: 4970.12,
      open: 4972.89,
      timestamp: 1587660000000,
      volume: 204,
    },
    {
      close: 4977.33,
      high: 4979.94,
      low: 4971.34,
      open: 4973.2,
      timestamp: 1587660060000,
      volume: 194,
    },
    {
      close: 4977.93,
      high: 4977.93,
      low: 4974.2,
      open: 4976.53,
      timestamp: 1587660120000,
      volume: 197,
    },
    {
      close: 4966.77,
      high: 4968.53,
      low: 4962.2,
      open: 4963.88,
      timestamp: 1587660180000,
      volume: 28,
    },
    {
      close: 4961.56,
      high: 4972.61,
      low: 4961.28,
      open: 4961.28,
      timestamp: 1587660240000,
      volume: 184,
    },
    {
      close: 4964.19,
      high: 4964.74,
      low: 4961.42,
      open: 4961.64,
      timestamp: 1587660300000,
      volume: 191,
    },
    {
      close: 4968.93,
      high: 4972.7,
      low: 4964.55,
      open: 4966.96,
      timestamp: 1587660360000,
      volume: 105,
    },
    {
      close: 4979.31,
      high: 4979.61,
      low: 4973.99,
      open: 4977.06,
      timestamp: 1587660420000,
      volume: 35,
    },
    {
      close: 4977.02,
      high: 4981.66,
      low: 4975.14,
      open: 4981.66,
      timestamp: 1587660480000,
      volume: 135,
    },
    {
      close: 4985.09,
      high: 4988.62,
      low: 4980.3,
      open: 4986.72,
      timestamp: 1587660540000,
      volume: 76,
    },
  ]);

  chart.createIndicator("VOL");
});

onUnmounted(() => {
  // 销毁图表
  dispose("chart");
});
</script>

<template>
  <div class="chart">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>{{ type }}/USDT</span>
      <span >持仓</span>
    </div>
    <div class="banner">
      <div :class="route.query.up=='1'?'up':'down'">
        <span>{{ currentPrice }}</span>
        <span>{{parcent}}</span>
      </div>
      <div>
        <span>24H最高价</span>
        <span>24H最低价</span>
        <span>24H成交量</span>
      </div>
      <div>
        <span>21464</span>
        <span>20261</span>
        <span>3151</span>
      </div>
    </div>
    <div
      id="kline"
      style="
        width: 100%;
        height: 550px;
        box-sizing: border-box;
        margin: 20px 0px;
      "
    ></div>
    <div class="btn">
      <button class="buy" @click="buy">买入做多</button>
      <button class="sell" @click="sell">卖出做空</button>
    </div>
    <van-popup v-model:show="buypopup" style="width: 80%; height: 400px" round>
      <div class="buypopup">
        <div class="title">
          <span></span>
          <span>买入做多</span>
          <span class="material-symbols-outlined" @click="closePopup">
            close
          </span>
        </div>
        <div>
          <span>名称</span><span>{{ type }}/USDT</span>
        </div>
        <div><span>方向</span><span style="color: #00b8a9">买涨</span></div>
        <div>
          <span>当前价</span><span>{{ currentPrice }}</span>
        </div>
        <div class="tab">
          <button
            v-for="(item, index) in tabList"
            :key="index"
            @click="changeTab(item)"
            :class="tab_btn == item.time ? 'active' : ''"
          >
            {{ item.time }} {{ item.parcent }}
          </button>
        </div>
        <div>
          <span>买入数量:</span
          ><input type="text" placeholder="请输入购买数量" />
        </div>
        <p>账户余额: 100000.00 USDT</p>
        <div><button class="last_btn" @click="buy_sure">买入做多</button></div>
      </div>
    </van-popup>
    <van-popup v-model:show="sellpopup" style="width: 80%; height: 400px" round
      ><div class="sellpopup">
        <div class="title">
          <span></span>
          <span>买入做多</span>
          <span class="material-symbols-outlined" @click="closePopup">
            close
          </span>
        </div>
        <div>
          <span>名称</span><span>{{ type }}/USDT</span>
        </div>
        <div><span>方向</span><span style="color: #e23e57">买跌</span></div>
        <div>
          <span>当前价</span><span>{{ currentPrice }}</span>
        </div>
        <div class="tab">
          <button
            v-for="(item, index) in tabList"
            :key="index"
            @click="changeTab(item)"
            :class="tab_btn == item.time ? 'active' : ''"
          >
            {{ item.time }} {{ item.parcent }}
          </button>
        </div>
        <div>
          <span>买入数量:</span
          ><input type="text" placeholder="请输入购买数量" />
        </div>
        <p>账户余额: 100000.00 USDT</p>
        <div><button class="last_btn" @click="sell_btn">卖出做空</button></div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  width: auto;
  height: auto;
  padding: 15px;
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
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    font-weight: 600;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      font-size: 14px;
      span {
        padding: 3px 0px;
      }
    }
    .down{
      color: #e23e57;
    }
    .up{
      color: #00b8a9;
    }
  }
  .btn {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
    button {
      width: 40%;
      height: 35px;
      font-size: 13px;
      border: 0;
      color: #fff;
    }
    .sell {
      border-radius: 3px;
      background: #e23e57;
    }
    .buy {
      border-radius: 3px;
      background: #00b8a9;
    }
  }
  .buypopup {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 14px;
    font-size: 14px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0px;
      input {
        width: 70%;
        height: 30px;
        padding-left: 15px;
        font-size: 13px;
        border: 0;
      }
      .last_btn {
        width: 80%;
        margin: 0 auto;
        height: 30px;
        border: 0;
        border-radius: 3px;
        background: #fbd033;
        font-size: 12px;
        font-weight: 500;
        color: #000;
        margin-top: 20px;
      }
    }
    p {
      font-size: 12px;
      margin-top: 5px;
    }
    .tab {
      button {
        border: 0;
        font-size: 12px;
        padding: 3px 2px;
      }
      .active {
        background: #fbd033;
        color: #fff;
        font-size: 13px;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
    }
  }
  .sellpopup {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 14px;
    font-size: 14px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0px;
      input {
        width: 70%;
        height: 30px;
        padding-left: 15px;
        font-size: 13px;
        border: 0;
      }
      .last_btn {
        width: 80%;
        margin: 0 auto;
        height: 30px;
        border: 0;
        border-radius: 3px;
        background: #fbd033;
        font-size: 12px;
        font-weight: 500;
        color: #000;
        margin-top: 20px;
      }
    }
    p {
      font-size: 12px;
      margin-top: 5px;
    }
    .tab {
      button {
        border: 0;
        font-size: 12px;
        padding: 3px 2px;
      }
      .active {
        background: #fbd033;
        color: #fff;
        font-size: 13px;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>