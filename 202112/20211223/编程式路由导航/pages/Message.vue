<template>
  <div>
       <ul>
            <li v-for="m in messages" :key='m.id'>
                <!-- 跳转路由，并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
              <!-- 跳转路由并携带params参数，to的对象写法 -->
               <router-link :to="{
                   name:'detail',
                   params:{//用params
                       id:m.id,
                       title:m.title
                   }
               }">
                   {{m.title}}
                   </router-link>   
                <button @click="pushShow(m)">push查看</button> 
                <button @click="replaceShow(m)">repalce查看</button> 
            </li>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return{
                messages:[
                    {id:'001',title:'message001'},
                    {id:'002',title:'message002'},
                    {id:'003',title:'message003'}

                ]
            }
        },
        methods:{
            pushShow(m){
                this.$router.push({
                       name:'detail',
                       params:{//用params
                       id:m.id,
                       title:m.title
                   }
                })
         
            },
            replaceShow(m){
                this.$router.replace({
                    name:'detail',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                })

            }
        }


    }
</script>

