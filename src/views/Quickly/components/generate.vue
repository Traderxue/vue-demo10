<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter()

const time = ref( 15 * 60 * 1000);

const usdt_num = ref(0)

const cny_num = computed(()=>{
    return (usdt_num.value*6.5).toFixed(2)
})

const goBack = () =>{
    router.back()
}

onMounted(()=>{
    usdt_num.value = route.query._value
})
</script>

<template>
  <div class="generate">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack"> arrow_back_ios_new </span>
      <span></span>
    </div>
    <div class="banner">
        <h3>订单已生成</h3>
        <span>付款剩余时间<van-count-down :time="time" /></span>
    </div>
    <div class="box">
        <h3>卖家信息</h3>        
        <p>卖家已通过平台实名认证</p>
        <p>卖家已在平台缴纳<span style="color:#e23e57;font-weight: 600;">10000</span> USDT 保证金</p>
    </div>
    <div class="list">
        <div>
            <span>数量</span>
            <span>{{usdt_num}} USDT</span>
        </div>
        <div>
            <span>总金额</span>
            <span style="font-weight: 600;">{{cny_num}} CNY</span>            
        </div>
        <div>
            <span>卖家收款方式</span>
            <span>支付宝</span>
        </div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.generate {
  width: auto;
  height: auto;
  padding: 15px;
  .header{
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    .arrow{
        font-size: 20px;
    }
  }
  .banner{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px 0px;
    span{
        font-size: 14px;
        padding: 10px 0px;
        .van-count-down{
            font-weight: 600;
            color: #00b8a9;
        }
    }
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: left;
    background: #E3F6F2;
    padding: 20px;   
    color: #000;
    border-radius: 5px;
    h3{
        color: #666;
    }
    p{
        font-size: 12px;
        color: #666;
        padding-top: 10px;
    }
  }
}
</style>