<template>
    <div class="todo-footer" v-show='total'>
        <label>
          <input type="checkbox" :checked='isAll' @change="checkAll"/>
        </label>
        <span>
          <span>已完成{{doneCont}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click='clearAll'>清除已完成任务</button>
      </div>
</template>

<script>
export default {
   name:'Myfooter',
   props:['todoList'],
   computed:{
     total(){
       return this.todoList.length
     },
     doneCont(){
     /*   //第一种方式，循环加计数
      let i=0
      this.todoList.forEach(todo => {
        if(todo.done){i++}});
     return i */
       //第二种方式，reduce累加
        return this.todoList.reduce((pre,todo)=>pre + (todo.done ? 1:0),0)  
     },
     isAll(){
       return  this.doneCont===this.total&&this.total>0
     }
   },
  //  告诉app，改变todo的done的属性
   methods: {
     checkAll(e){
        //  this.checkAllTodo(e.target.checked)
        this.$emit('checkAllTodo',e.target.checked)
     },
     clearAll(){
      //  this.clearAllTodo()
      this.$emit('clearAllTodo')

     }
   },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>