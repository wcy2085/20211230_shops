// 该文件用户创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'



//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/About',
            component:About
        },
        {
            path:'/Home',
            component:Home,
            children:[
                {
                    path:'News',
                    component:News,
                },
                {
                    path:'Message',
                    component:Message,
                    children:[
                        {
                            name:'detail',
                            path:'Detail/:id/:title',//占位符
                            component:Detail, 
                        }
                    ]
                }
            ]
        }
    ]
})

