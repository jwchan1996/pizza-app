//抽离出来的路由配置

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    {path:'/',components:{      //显示多个组件
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',component:Menu},
    {path:'/admin',component:Admin,
      // beforeEnter: (to, from, next) => {
      //   // 路由独享守卫
      //   console.log("触发路由独享守卫")
      //   next()
      // }
    },
    //设置路由默认展示的组件,添加redirect键值
    {path:'/about',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',redirect:'/about/contact/phone',component:Contact,children:[
        //可以给路由指定名字name
        {path:'/about/contact/phone',name:'phoneNumber',component:Phone},
        {path:'/about/contact/personname',name:'personName',component:PersonName},
      ]},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',component:History},
      {path:'/orderingGuide',component:OrderingGuide},
    ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'*',redirect:'/'},
]