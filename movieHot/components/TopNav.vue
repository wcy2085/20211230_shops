<template>

  <div id="topnavwrapper">
           <img :src="src" alt="">
           <div id="hot" class="active" @click='handelNav'>榜单</div>
  </div>
</template>

<script>
export default {
    name:'TopNav',
    data(){
        return{
         src:require('../asserts/boxoffice/logo.png'),   
        }
    },
    methods: {
        handelNav(){
            
        }
    },

}
</script>


<style scroped>
#topnavwrapper{
    width: 100%;
    line-height: 50px;
    display: flex;
    border-bottom: 1px solid #ccc;
    
}
#hot{
    display: inline-block;
    font-weight: bolder;
    font-size: 28px;
    border-bottom: 3px solid tomato;
    margin: 0 auto;

    
}
.active{
    color: tomato;
}

</style>