<template>
  <div class="demo">
      <h2>欢迎你</h2>
      <h2>快回家了</h2>
      <h2>学校的名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'bdqn',
            address:'合肥'
        }
    },

}
</script>

<style>
.demo{
    background-color: #ccc;
}
</style>