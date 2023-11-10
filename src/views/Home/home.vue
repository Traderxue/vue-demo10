<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import i18n from "@/lang/index.js";

const router = useRouter();

const navList = ref([
  {
    url: "http://127.0.0.1:5173/黄金.png",
    title: "买币",
  },
  {
    url: "http://127.0.0.1:5173/银行卡.png",
    title: "银行卡",
    path:'/yhk'
  },
  {
    url: "http://127.0.0.1:5173/分析.png",
    title: "分析",
  },
  {
    url: "http://127.0.0.1:5173/钱包.png",
    title: "钱包",
    path:"/wallet"
  },
]);

const tab_active = ref("涨跌幅榜");

const tabs = ref([
  {
    title: "涨跌幅榜",
    path: "/zhangdie",
  },
  {
    title: "成交额榜",
    path: "/deal",
  },
]);

const langList = ref([
  {
    lang:"en"
  },
  {
    lang:"zh"
  },
  {
    lang:"zh_hk"
  }
])

const menu = ref(false);
const lang = ref(false);

const showMenu = () => {
  menu.value = true;
};

const showLang = () => {
  lang.value = true;
};

const changeTab = (item) => {
  tab_active.value = item.title;
  router.push(item.path);
};

const goNav = (item)=>{
  router.push(item.path)
}

const changeLang = (language) =>{
  i18n.global.locale = language
  lang.value = false
}
</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined" @click="showMenu"> menu </span>
      <van-popup
        v-model:show="menu"
        position="left"
        :style="{ height: '100%', width: '60%' }"
      />
      <span>{{$t('home.title')}}</span>
      <span class="material-symbols-outlined" @click="showLang">
        language
      </span>
      <van-popup
        v-model:show="lang"
        position="top"
        :style="{ height: '30%' }"
      >
      <div class="lang">
        <span v-for="(item,index) in langList" @click="changeLang(item.lang)" :key="index">{{item.lang}}</span>
      </div>
    </van-popup>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="http://127.0.0.1:5173/banner_1.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://127.0.0.1:5173/banner_2.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://127.0.0.1:5173/banner_3.png" alt=""
      /></van-swipe-item>
    </van-swipe>
    <van-notice-bar
      left-icon="volume-o"
      background="#FFF"
      color="#666"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index" @click="goNav(item)">
        <img :src="item.url" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="tab_active == item.title ? 'active' : ''"
        @click="changeTab(item)"
        >{{ item.title }}</span
      >
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  .header{
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    padding: 10px;
    .lang{
      padding: 20px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      span{
        padding: 10px 0px;
      }
    }
  }
  .my-swipe{
    margin: 20px 0px;
    height: 160px;
    img{
      width: 100%;
      height: 160px;
      border-radius: 5px;
    }
  }
  .nav{
    display: flex;
    justify-content: space-around;
    background: #FFF;
    margin: 10px 0px;
    padding: 10px 0px;
    border-radius: 5px;
    div{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      font-weight: 500;
      font-size: 13px;
      img{
        width: 30px;
        height: 30px;
        padding-bottom: 5px;
      }
    }
  }
  .tab{
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    background: #FFF;
    .active{
      color: #1A73EC;
    }
  }
}
</style>