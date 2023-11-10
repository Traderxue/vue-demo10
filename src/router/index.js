import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:([
        {
          path:"",
          component:()=>import("@/views/Home/home.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/Home/components/zhangdie.vue")
            }            
          ])       
        },
        {
          path:"/home",
          component:()=>import("@/views/Home/home.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/Home/components/zhangdie.vue")
            },
            {
              path:"/zhangdie",
              component:()=>import("@/views/Home/components/zhangdie.vue")
            },
            {
              path:"/deal",
              component:()=>import("@/views/Home/components/deal.vue")
            }
          ])
        },
        {
          path:"/trade",
          component:()=>import("@/views/Trade/trade.vue")
        },
        {
          path:"/wallet",
          component:()=>import("@/views/Wallet/wallet.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/Wallet/components/coins.vue")
            },
            {
              path:"/coins",
              component:()=>import("@/views/Wallet/components/coins.vue")
            },
            {
              path:"/lock",
              component:()=>import("@/views/Wallet/components/lock.vue")
            }
          ])
        },
        {
          path:"/mine",
          component:()=>import("@/views/Mine/mine.vue"),
        },
        
      ])
    },
    {
      path:"/security",
      component:()=>import("@/components/Security.vue")
    },
    {
      path:"/real",
      component:()=>import("@/components/Realname.vue")
    },
    {
      path:"/invite",
      component:()=>import("@/components/invite.vue")
    },
    {
      path:"/chongzhi",
      component:()=>import("@/components/chongzhi.vue")
    },
    {
      path:"/yhk",
      component:()=>import("@/components/yhk.vue")
    },
    {
      path:"/order",
      component:()=>import("@/components/Order.vue")
    },
    {
      path:"/setting",
      component:()=>import("@/components/setting.vue")
    },
    {
      path:"/chart",
      component:()=>import("@/components/chart.vue")
    }
  ]
})

export default router
