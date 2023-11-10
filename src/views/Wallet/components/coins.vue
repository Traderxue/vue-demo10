<script setup>
import { ref } from "vue";

const listData = ref([
    {
        type:"BTC",
        canuse:"0.0000",
        freeze:"0.0000",
        fold:"0.000"
    },
    {
        type:"ETH",
        canuse:"0.0000",
        freeze:"0.0000",
        fold:"0.000"
    },
    {
        type:"SOL",
        canuse:"0.0000",
        freeze:"0.0000",
        fold:"0.000"
    },
    {
        type:"APE",
        canuse:"0.0000",
        freeze:"0.0000",
        fold:"0.000"
    },
    {
        type:"DOGE",
        canuse:"0.0000",
        freeze:"0.0000",
        fold:"0.000"
    },
])
</script>

<template>
  <div class="coins">
    <div class="per" v-for="(item,index) in listData" :key="index">
      <div class="top">
        <span style="color: #1a73e8">{{item.type}}</span>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div><span>可用</span><span>冻结</span><span>折合(USDT)</span></div>
      <div><span>{{item.canuse}}</span><span>{{item.freeze}}</span><span>{{item.fold}}</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coins {
  width: auto;
  height: auto;
  padding: 15px 0px;
  padding-bottom: 70px;
  background: #fff;
  .per {
    margin: 15px 0px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #f6f6f6;
    border-radius: 3px;
    padding: 15px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0px;
      .arrow {
        font-size: 18px;
      }
    }
    .top {
      padding-bottom: 10px;
    }
  }
}
</style>