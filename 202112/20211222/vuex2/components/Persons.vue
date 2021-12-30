<template>
  <div>
      <h1>人员列表</h1>
      <h1 style="color:red">count组件的求和为：{{sum}}</h1>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key='p.id'>{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Persons',
        data(){
            return{
               name:''
            }
        },
        methods:{
            add(){
               const personObj={
                   id:nanoid(),
                   name:this.name
               }
               this.$store.commit('presonAbout/ADD_PERSON',personObj)
               this.name=''
            },
            
        },
        computed:{
            personList(){
                return this.$store.state.presonAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            }
        }
    }
</script>

<style>

</style>