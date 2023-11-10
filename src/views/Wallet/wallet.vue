<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const num = ref("0.0000");

const active = ref(true);

const activeTitle = ref("币币");

const navData = ref([
  {
    title: "币币",
    path: "/coins",
  },
  {
    title: "锁仓挖矿",
    path: "/lock",
  },
]);

const showNum = () => {
  active.value = false;
  num.value = "***";
};

const showFold = () => {
  active.value = true;
  num.value = "0.000";
};

const changeTab = (item) => {
  activeTitle.value = item.title;
  router.push(item.path)
};
</script>

<template>
  <div class="wallet">
    <div class="header">
      <span>资产</span>
    </div>
    <div class="top">
      <div>
        <span>总资产折合</span>
        <span
          class="material-symbols-outlined visibility"
          v-if="active"
          @click="showNum"
        >
          visibility
        </span>
        <span
          class="material-symbols-outlined visibility"
          v-else
          @click="showFold"
        >
          visibility_off
        </span>
      </div>
      <h3>{{ num }} USDT</h3>
      <p>{{ num }} USD</p>
    </div>
    <div class="nav">
      <span
        v-for="(item, index) in navData"
        :key="index"
        @click="changeTab(item)"
        :class="activeTitle==item.title?'active':''"
        >{{ item.title }}</span
      >
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  background: #fff;
  padding: 20px;
  .header {
    text-align: center;
  }
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px;
    div {
      display: flex;
      align-items: center;
      .visibility {
        margin-left: 5px;
        font-size: 18px;
      }
    }
    h3 {
      padding: 10px 0px;
    }
    p {
      font-size: 12px;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    .active {
      color: #fbd033;
    }
  }
}
</style>