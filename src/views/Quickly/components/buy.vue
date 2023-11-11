<script setup>
import { ref,computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showBottom = ref(false);

const usdt_num = ref("")

const shop = ref({});


const pay_num = computed(()=>{
  return (usdt_num.value*shop.value.price).toFixed(2)
})

const showList = ref([
  {
    avatar: "http://127.0.0.1:5173/acatar.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num: "1000",
    limit: "1000.00-10000.00",
    price: "6.56",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_1.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num: "1000",
    limit: "1000.00-10000.00",
    price: "6.56",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_2.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num: "1000",
    limit: "1000.00-10000.00",
    price: "6.56",
  },
  {
    avatar: "http://127.0.0.1:5173/avatar_3.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num: "1000",
    limit: "1000.00-10000.00",
    price: "6.56",
  },
  {
    avatar: "http://127.0.0.1:5173/acatar_4.png",
    shop_name: "hadhas",
    deal: "10",
    rate: "95%",
    num: "1000",
    limit: "1000.00-10000.00",
    price: "6.56",
  },
]);

const goShop = (item) => {
  showBottom.value = true;
  shop.value = item;
};

const goGenerate = () =>{
  router.push({
    path:"/generate",
    query:usdt_num
  })
}
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
          <h3>{{ item.shop_name }}</h3>
        </div>
        <div>
          <span>&nbsp;{{ item.deal }} </span> &nbsp;|<span>
            &nbsp;{{ item.rate }}</span
          >
        </div>
      </div>
      <div>
        <span>限额 {{ item.limit }} CNY</span>
        <span>单价</span>
      </div>
      <div>
        <span>数量 {{ item.num }} USDT</span>
        <span style="color: #0165ec; font-weight: 600"
          >{{ item.price }} CNY</span
        >
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
        <button>购买</button>
      </div>
    </div>
    <van-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <div class="box">
        <div>
          <img
            src="https://etherscan.io/token/images/tethernew_32.png"
            alt=""
          />
          <h3>购买 USDT</h3>
        </div>
        <div>
          <input type="text" placeholder="请输入购买数量" v-model="usdt_num"/><span>USDT</span>
        </div>
        <p>限额: {{ shop.limit }} USDT</p>
        <div>
          <span>支付方式</span
          ><select name="" id="">
            <option value="zfb">
              <span>支付宝</span>
            </option>
            <option value="yhk"><span>银行卡</span></option>
            <option value="wx"><span>微信</span></option>
          </select>
        </div>
        <div><span>应付</span><span>{{pay_num}} CNY</span></div>
        <div>
          <button @click="goGenerate">购买 USDT</button>
        </div>
      </div>
    </van-popup>
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
.box {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 50px;
  font-weight: 600;
  color: #000;
  font-size: 15px;
  p {
    font-size: 12px;
    font-weight: 500;
    color: #000;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    input {
      border: 0;
      font-size: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid gray;
    }
    select{
      outline: none;
      border: 0;
      width: 60px;
      height: 25px;
    }
    button{
      width: 100%;
      height: 35px;
      border: 0;
      border-radius: 3px;
      background: #000000;
      font-size: 13px;
      font-weight: 500;
      color: #FFF;
    }
  }
}
</style>