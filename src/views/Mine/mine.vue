<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const listData = ref([
    {
        logo:"http://127.0.0.1:5173/img_1.png",
        realname:"安全中心",
        path:"/security"
    },
    {
        logo:"http://127.0.0.1:5173/img_2.png",
        realname:"实名认证",
        path:"/real"
    },
    {
        logo:"http://127.0.0.1:5173/img_3.png",
        realname:"邀请好友",
        path:"/invite"
    },
    {
        logo:"http://127.0.0.1:5173/img_4.png",
        realname:"充值记录",
        path:"/chongzhi"
    },
    {
        logo:"http://127.0.0.1:5173/img_5.png",
        realname:"银行卡",
        path:"/yhk"
    },
    {
        logo:"http://127.0.0.1:5173/img_6.png",
        realname:"订单记录",
        path:"/order"
    },
    {
        logo:"http://127.0.0.1:5173/img_7.png",
        realname:"设置",
        path:"setting"
    }
])

const changeTab = (item) =>{
  router.push(item.path)
}
</script>

<template>
  <div class="mine">
    <div class="header">
      <img src="http://127.0.0.1:5173/acatar.png" alt="" />
      <span>ID: 108549</span>
      <span>信用分 100</span>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in listData" :key="index" @click="changeTab(item)">
        <div>
          <img :src="item.logo" alt="" /><span>{{item.realname}}</span>
        </div>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  background: #fff;
  padding-bottom: 70px;
  .header {
    padding: 30px 0px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    span {
      padding: 3px 0px;
    }
  }
  .box{
    width: auto;
    height: auto;
    margin-top: 25px;
    .per{
        padding: 20px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
            .arrow{
                font-size: 18px;
            }
        }
    }
  }
}
</style>