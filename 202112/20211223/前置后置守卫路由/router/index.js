// 该文件用户创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'



//创建并暴露一个路由器
const router= new VueRouter({
    routes:[
        {   name:'guanyu',
            path:'/About',
            component:About,
            meta:{title:'关于'}
        },
        {   name:'zhuye',
            path:'/Home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'News',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},//在meta里增加一个自定义属性，用于标识权限
                },
                {
                    name:'xiaoxi',
                    path:'Message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                        name:'detail',
                        path:'Detail/:id/:title',//占位符
                        component:Detail, 
                        meta:{isAuth:true,title:'消息'},

                        }
                    ]
                }
            ]
        },
    ]
})
//全局前置路由守卫  初始化的时候 和 在每一次路由切换的之前，调用这个函数
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    // if(to.name==='xinwen'||to.name==='xiaoxi'){//第一种方式，判断路径或者路由名字
      if(to.meta.isAuth){//第二种方式，判断自定义的属性，别的路由没设置，则是undefined,就是false
        if(localStorage.getItem('school')==='bdqn'){
            next()
        }else{
            alert('无权限')
        }
    }else{
        next()
    }  
})

// 全局后置路由守卫——初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
   document.title=to.meta.title||'bdqn'
})
export default router



