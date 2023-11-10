<script  setup>
import { ref } from "vue";

const dataList = ref([
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
</script>

<template>
    <div class="zhangdie">
        <div class="title">
            <span>种类</span>
            <span style="text-align: center;">价格</span>
            <span style="text-align: right;">涨跌幅</span>
        </div>
        <div class="box" v-for="(item,index) in dataList" :key="index">
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
.zhangdie{
    width: auto;
    height: auto;
    padding-top: 20px;
    padding-bottom: 70px;
    background: #FFF;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            width: 33%;
        }
    }
    .box{
        display: flex;
        justify-content: space-between;        
        align-items: center;
        padding: 10px 0px;
        margin: 10px 0px;
        font-weight: 600;
        div{
            width: 33%;
            img{
                border-radius: 50%;
                margin-right: 10px;
            }
            button{
                width: 65px;
                height: 30px;
                border: 0;
                color: #FFF;
                font-weight: 600;
                font-size: 12px;
                border-radius: 3px;
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
            align-items: center;
        }
    }

}
</style>