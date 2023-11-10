<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const typeList = ref([
{
        logo:"https://etherscan.io/token/images/bnb_28_2.png",
        type:"BTC",
        price:"21946",
        parcent:"+0.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        type:"ETH",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        type:"APE",
        price:"2.16",
        parcent:"-2.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/uniswap_32.png",
        type:"DOGE",
        price:"0.016",
        parcent:"+1.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/okex_32.png",
        type:"SOL",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/trueusd_32.png",
        type:"DOGE",
        price:"0.016",
        parcent:"+1.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/cronoseth_32.png",
        type:"SOL",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/bnb_28_2.png",
        type:"BTC",
        price:"21946",
        parcent:"+0.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        type:"ETH",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        type:"APE",
        price:"2.16",
        parcent:"-2.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/uniswap_32.png",
        type:"DOGE",
        price:"0.016",
        parcent:"+1.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/okex_32.png",
        type:"SOL",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
    {
        logo:"https://etherscan.io/token/images/trueusd_32.png",
        type:"DOGE",
        price:"0.016",
        parcent:"+1.21%",
        up:1
    },
    {
        logo:"https://etherscan.io/token/images/cronoseth_32.png",
        type:"SOL",
        price:"21946",
        parcent:"-0.21%",
        up:0
    },
])

const goChart =(item) =>{
    router.push({
        path:"/chart",
        query:item
    })
}
</script>

<template>
    <div class="trade">
        <div class="title" style="text-align: center;">
            <span>行情</span>
        </div>
        <div class="header">
            <span style="text-align: left;">交易对</span><span>最新价格</span><span style="text-align: right;">24H涨跌幅</span>
        </div>
        <div class="box" v-for="(item,index) in typeList" :key="index" @click="goChart(item)">
            <div class="box_type">
                <img :src="item.logo" alt="">
                <span>{{item.type}}/USDT</span>
            </div>
            <div style="text-align: center;">
                <span :class="item.up==1?'up':'down'">{{item.price}}</span>
            </div>
            <div style="text-align: right;">
                <button :class="item.up==1?'up_btn':'down_btn'">{{item.parcent}}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.trade{
    width: auto;
    height: auto;
    background: #FFF;
    padding: 10px 10px 70px 10px;
    border-radius: 5px;
    font-size: 14px;
    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 10px;
        font-weight: 500;
        font-size: 12px;
        span{
            width: 33%;
            text-align: center;
        }
    }
    .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0px;
        div{
            width: 33%;
            button{
                border: 0;
                width: 70px;
                height: 30px;
                border-radius: 3px;
                font-size: 12px;
                color: #FFF;
            }
            .up{
                color: #02C289;
            }
            .down{
                color: #E13B45;
            }
            .up_btn{
                background: #02C289;
            }
            .down_btn{
                background: #E13B45;
            }
        }
        .box_type{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                border-radius: 50%;
                margin-right: 5px;                
            }
        }
    }
}
</style>