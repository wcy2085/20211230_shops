//创建Vuex中最为核心的store
// 引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);

//求和相关配置
const countOptions={
    namespaced:true,//开始命名空间
    actions:{
        jiaOdd(context, value){
            if(context.state.sum%2){
                context.commit("JIA", value);
            }
        },
        jiaWait(context, value){
          setTimeout(() => {
            context.commit("JIA", value);
          }, 500)},
    },
    mutations:{
        JIA(state, value) {
            // console.log('mutations的JIA被调用了',state,value);
            state.sum += value;
          },
        JIAN(state, value) {
            // console.log('mutations的JIAN被调用了',state,value);
            state.sum -= value;
          },
    },
    state:{
        sum: 0, //当前的和
        school:'bdqn',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }

}
//人员相关配置
const presonOptions={
    namespaced:true,
    //开始命名空间
    actions:{},
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
          }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
         ]
    },
    getters:{}

}

//创建并（暴露）store
export default  new Vuex.Store({
    modules:{//模块
        countAbout:countOptions,
        presonAbout:presonOptions
    }
  
 
});
