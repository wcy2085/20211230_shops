<template>
    <ul>
        <!-- 用params读取参数 -->
        <li>消息标题：{{$route.params.id}}</li>
        <li>消息：{{$route.params.title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        mounted(){
            console.log(this.$route);
        }
    }
</script>
