//创建Vuex中最为核心的store
// 引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);
//准备actions-用于响应组件中的动作
const actions = {
  /* key:value  value 是函数  
    函数有两个参数（context，value),context 是小的store，value是选择的加值 */

  /*  可简写
   jia:function(){
        console.log('jia被调用了');
    } */
 /*  jia(context, value) {
    // console.log('actions的jia被调用了',context,value);
    context.commit("JIA", value);
  },
  jian(context, value) {
    // console.log('actions的jian被调用了',context,value);
    context.commit("JIAN", value);
  }, */
  jiaOdd(context, value){
      if(context.state.sum%2){
          context.commit("JIA", value);
      }
  },
  jiaWait(context, value){
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
    
},
};
//准备mutations-用于操作数据（state）
const mutations = {
  JIA(state, value) {
    // console.log('mutations的JIA被调用了',state,value);
    state.sum += value;
  },
  JIAN(state, value) {
    // console.log('mutations的JIAN被调用了',state,value);
    state.sum -= value;
  },
  ADD_PERSON(state, value){
    state.personList.unshift(value)
  }
};

//准备state-用于存储数据
const state = {
  sum: 0, //当前的和
  school:'bdqn',
  subject:'前端',
  personList:[
     {id:'001',name:'张三'}
  ]

};

//准备getters——用于将state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}

//创建并（暴露）store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
