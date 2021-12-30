<template>
  <div>
      <button @click='isShow=!isShow'>显示/隐藏</button>
     <transition appear>
        <h1 v-show="isShow" class="go">你好啊</h1>
     </transition>
      
  </div>
</template>

<script>
    export default {
        name:'Test',
        data(){
            return{
                isShow:true
            }
        }
    }
</script>

<style scoped>
  h1{
      background-color: orange;
  }
  .v-enter-active{
      animation: showNo 1s;
  }
  .v-leave-active{
      animation: showNo 1s  reverse;
  }
  @keyframes showNo {
      from{
          transform: translateX(-100%);
      }
      to{
          transform: translateX(0);
      }
  }
</style>