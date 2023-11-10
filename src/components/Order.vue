<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const perList = ([
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:1,
    profit:"+1624",
    up:1
  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:0,
    profit:"+1624",
    up:1
  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:1,
    profit:"+1624",
    up:0

  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:0,
    profit:"+1624",
    up:1
  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:1,
    profit:"+1624",
    up:0

  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:0,
    profit:"+1624",
    up:1
  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:1,
    profit:"+1624",
    up:0

  },
  {
    time:"2022/10/12 14:22:02",
    type:"BTC",
    direction:1,
    profit:"+1624",
    up:1
  },
])

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="order">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>订单记录</span>
      <span></span>
    </div>
    <div class="per" v-for="(item,index) in perList" :key="index">
      <div><span>时间</span><span>{{item.time}}</span></div>
      <div><span>类型</span><span style="color: #e23e57;">{{item.type}}/USDT</span></div>
      <div><span>方向</span><span>{{item.direction==1?'多':'空'}}</span></div>
      <div><span>盈亏</span><span :class="item.up==1?'up':'down'">{{item.profit}} USDT</span></div>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.order {
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
  .per{
    display: flex;
    justify-content: space-around;    
    flex-direction: column;
    font-size: 13px;
    padding: 15px 30px;
    background: #FFF;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 600;
    div{
      display: flex;
      justify-content: space-between;      
      padding: 3px;
      .up{
        color: #27AB63;
      }
      .down{
        color: #FF0000;
      }
    }
  }
}
</style>