<template>
  <div>
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">go</button>

        <br><br>
      </div>   
  </div>
</template>

<script>
    export default {
         name:'banner',
         methods: {
           back(){
             this.$router.back()
           },
          forward(){
             this.$router.forward()
          },
          test(){
             this.$router.go(2)

          }
         },
    }
</script>
