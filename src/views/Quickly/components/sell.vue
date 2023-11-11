<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const showList = ref([
  {
    avatar: "http://127.0.0.1:5173/acatar.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num:"1000",
    limit: "1000.00-10000.00",
    price: "6.47",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_1.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num:"1000",
    limit: "1000.00-10000.00",
    price: "6.46",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_2.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num:"1000",
    limit: "1000.00-10000.00",
    price: "6.46",
  },
  {
    avatar: "http://127.0.0.1:5173/avatar_3.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num:"1000",
    limit: "1000.00-10000.00",
    price: "6.46",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_4.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num:"1000",
    limit: "1000.00-10000.00",
    price: "6.46",
  },
]);

const goShop = (item) => {};
</script>

<template>
    <div class="buy">
        <div
      class="shop"
      v-for="(item, index) in showList"
      :key="index"
      @click="goShop(item)"
    >
      <div>
        <div>
          <van-badge dot position="bottom-right" color="#00AC90"
            ><img :src="item.avatar" alt="" class="avatar"
          /></van-badge>
          <h3>{{item.shop_name}}</h3>
        </div>
        <div><span>&nbsp;{{item.deal}} </span> &nbsp;|<span> &nbsp;{{item.rate}}</span></div>
      </div>
      <div><span>数量 {{item.num}} USDT</span><span>单价</span></div>
      <div>
        <span>限额 {{item.limit}} CNY</span
        ><span style="color: #0165ec; font-weight: 600">{{item.price}} CNY</span>
      </div>
      <div>
        <div>
          <img
            src="http://127.0.0.1:5173/pay_yhk.png"
            alt=""
            class="icon_type"
          />
          <img
            src="http://127.0.0.1:5173/pay_wx.png"
            alt=""
            class="icon_type"
          />
          <img
            src="http://127.0.0.1:5173/pay_zfb.png"
            alt=""
            class="icon_type"
          />
        </div>
        <button>出售</button>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
 .shop {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 15px 0px;
    border-bottom: 1px solid gray;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      padding: 3px 0px;
      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;

      }
      .icon_type {
        width: 20px;
        height: 20px;
        margin: 0px 5px;
      }
      h3 {
        color: #000;
        font-size: 17px;
        margin-left: 10px;
      }
      button {
        width: 80px;
        height: 35px;
        border: 0;
        font-size: 13px;
        color: #fff;
        border-radius: 2px;
        background: #0165ec;
      }
    }
  }
</style>