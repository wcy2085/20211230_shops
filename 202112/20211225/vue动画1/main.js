//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//完整引入，应用全部组件
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//应用ElementUI
// Vue.use(ElementUI);

//按需引入ElementUI

import { Button,DatePicker} from 'element-ui';

Vue.use(Button)
Vue.use(DatePicker)
 


//关闭Vue的生产提示
Vue.config.productionTip = false;

//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
});
