<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import {showToast} from 'vant';

const active = ref(0);

const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span><br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> monitoring </span><br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span
        ><br />
        <span>钱包</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span><br />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index{
    width: auto;
    height: auto;
    padding: 15px;
    font-size: 14px;
    font-weight: 600;
}
</style>