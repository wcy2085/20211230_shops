<template>
       <li>
          <label>
            <input type="checkbox"  @change="handelCheck(todo.id)"  :checked='todo.done'/>
           <!-- 第二种实现方式，可以用v-model，修改了props对象的属性，不建议使用 -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
            <!-- <span>{{todo.done}}</span> -->
          </label>
          <button class="btn btn-danger" @click='handelDel(todo.id)'>删除</button>
       </li>
</template>

<script>
export default {
   name:'Myitem',
   props:['todo','checkTodo','deleteTodo'],
   methods: {
      // 勾选改变done的属性值
      // 通知父组件更改todo.done的属性值
      handelCheck(id){
         //  console.log(this.todo)
         // 可以打印todo，但没办法打印todo.done，想要操作更改done，就得去源数据处更改它
       this.checkTodo(id)
      },

      // 通知父组件更改todoList的删除todo
      handelDel(id){
          if(confirm('确定要删除吗？')){
            this.deleteTodo(id)
          }
      }

   },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
   background-color: #ddd;
}
li:hover button{
   display: block;
}
</style>