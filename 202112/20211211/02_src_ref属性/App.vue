<template>
  <div>
    <h2 v-text="msg" ref='title'></h2>
    <button @click='showDOM' ref='btn'>点出输出上方的dom元素</button>
    <h2>你好呀</h2>
	  <school ref="sch"></school>
  </div>
</template>

<script>
//引入school组件
import school from './components/School.vue'
 export default {
  name:'App',
  components:{school},
  data() {
    return {
    msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDOM(){
       console.log(this.$refs)
    }  
  }
}
</script>
