// 该文件是整个项目的入口文件
//引入Vue
import Vue from 'vue'
// 引入app组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//创建Vue的实例对象--vm
new Vue({
  el:'#app',
  //完成了：将app组件放入容器中
  render: h => h(App),

 /*  render(createElement){
    return createElement('h1','你好呀')
  } */
  
})
// .$mount('#app') 指定服务的容器 

