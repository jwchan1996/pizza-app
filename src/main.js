import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//引入抽离出来的路由配置
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history',
  //路由控制滚动行为
  scrollBehavior (to, from, savedPosition) {
    // return {x:0,y:100}

    //选择器,可以选择滚动到对应的元素
    // return {selector:'.btn'}

    //savedPosition保存页面位置，浏览器前进后退键触发
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

//全局守卫
// router.beforeEach((to, from, next) => {
//   //to and from are Route Object,next() must be called to resolve the hook
//   // alert("还没有登录，请先登录！")
//   // next()
//   // console.log(from)
//   console.log(to)

//   //判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next()
//   }else{
//     alert("还没有登录，请先登录！")
//     next('/login')
//   }
// })

//全局后置钩子
// router.afterEach( (to,from) => {
//   console.log("成功进入组件了")
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
