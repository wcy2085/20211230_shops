/* 入口文件JS */
import Vue from "vue";
import App from "./App.vue";
// 引入路由器
import router from "./router";

import  '../static/css/reset.css'

//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
