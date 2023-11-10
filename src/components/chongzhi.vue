<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const dataList = ref([
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
  {
    time:"2023/11/12 13:50:02",
    money:"1000.00"
  },
])

const goBack = ()=>{
  router.back()
}
</script>

<template>
    <div class="chongzhi">
      <div class="header">
        <span class="material-symbols-outlined arrow" @click="goBack"> arrow_back_ios </span>
        <span>充值记录</span>
        <span></span>
      </div>
      <div class="per" v-for="(item,index) in dataList" :key="index">
        <div><span>时间</span><span>{{item.time}}</span></div>
        <div><span>金额</span><span style="color: #e23e57;">{{item.money}} USDT</span></div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .chongzhi{
      width: auto;
      height: auto;
      background: #F5F5F5;
      padding: 15px 15px 70px 15px;
      font-size: 15px;
      .header{
          width: auto;
          height: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .arrow{
          font-size: 22px;
        }
      }
      .per{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 10px 20px;
        font-size: 14px;
        border-bottom: 1px solid rgba(172, 170, 170,0.5);
        margin-bottom: 20px;
        font-weight: 600;
        div{
          display: flex;
          justify-content: space-between;
          padding: 5px 0px;
        }
      }
  }
  </style>