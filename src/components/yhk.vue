<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = ()=>{
  router.back()
}
</script>

<template>
  <div class="yhk">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack"> arrow_back_ios </span>
      <span>银行卡</span>
      <span></span>
    </div>
  </div>
</template>
  
  <style lang="scss" scoped>
.yhk {
  width: auto;
  height: auto;
  background: #f5f5f5;
  padding: 15px;
  font-size: 15px;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      font-size: 22px;
    }
  }
}
</style>