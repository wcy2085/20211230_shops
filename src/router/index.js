// 路由器对象模块
import Vue from "vue";
import VueRouter from "vue-router";
// 引入路由组件
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //所有路由
    routes:[
        {
           path:'/msite',
           component:MSite,
           meta:{
              footerShow:true
           }
        },
        {
            path:'/order',
            component:Order,
            meta:{
               footerShow:true
            }
         },
         {
            path:'/profile',
            component:Profile,
            meta: {
               footerShow:true
            }
         },
         {
            path:'/search',
            component:Search,
            meta: {
               footerShow:true
            }
         },
         {
            path:'/login',
            component:Login
         },
        //  默认显示首页的路由
         {
             path:'/',
             redirect:'/msite'
         }

    ]
})