<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("我要买");

const titleList = ref([
  {
    title: "我要买",
    path: "/buy",
  },
  {
    title: "我要卖",
    path: "/sell",
  },
]);



const goBack = () => {
  router.back();
};

const goTabs = (item) => {
  active.value = item.title;
  router.push(item.path)
};

</script>

<template>
  <div class="quickly">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back
      </span>
      <span></span>
    </div>
    <div class="banner">
      <div>
        <span
          v-for="(item, index) in titleList"
          :key="index"
          @click="goTabs(item)"
          :class="active == item.title ? 'active' : ''"
          >{{ item.title }}</span
        >
      </div>
      <span class="material-symbols-outlined"> list_alt </span>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.quickly {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
  }
  .banner {
    color: #666;
    font-size: 15px;
    font-weight: 600;
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
    span {
      padding-right: 10px;
    }
    .active {
      font-weight: 600;
      color: #000;
      font-size: 18px;
    }
  }
 
}
</style>