<template>
	<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
     	<Myheader @sendObj='addObj'></Myheader>
     	<Mylist :todoList='todoList' :checkTodo='checkTodo' :deleteTodo='deleteTodo'></Mylist>
   		<Myfooter :todoList='todoList' :checkAllTodo='checkAllTodo' :clearAllTodo='clearAllTodo'></Myfooter>
    </div>
  </div>
</div>
</template>

<script>
	import Myheader from  './components/Myheader.vue'
	import Mylist from  './components/Mylist.vue'
	import Myfooter from './components/Myfooter.vue'

	export default {
		name:'App',
		data(){
			return{
                todoList:JSON.parse(localStorage.getItem('todoList'))||[]
			}
		},
		methods: {
			// 添加一个todo
			addObj(obj){
				this.todoList.unshift(obj)
			},
			//勾选或者取消勾选一个todo
			checkTodo(id){
              this.todoList.forEach((todo)=>{
				  if(todo.id===id){
					  todo.done=!todo.done
				  }
			  })
			},
			// 删除一个todo
			deleteTodo(id){
				//第一种方式
             /*   this.todoList.forEach((todo)=>{
				   if(todo.id===id){
					   this.todoList.splice(id,1)  
				   }
			   }) */
			   //第二种方式
			   this.todoList=this.todoList.filter(todo=>todo.id!==id)
			},
			//全选/全不选，改变todo的done属性
			checkAllTodo(done){
				this.todoList.forEach((todo)=>{
					todo.done=done
				})
			},
			clearAllTodo(){
				this.todoList=this.todoList.filter((todo)=>{
                      return !todo.done
				})
			}	
		},
		// 用watch深度监视，如果todoList发生了变化，就给它变更存再本地缓存里
		watch:{
			todoList:{
				deep:true,
				handler(value){
					localStorage.setItem('todoList',JSON.stringify(value))
				}
			}

		},
		components:{
			Myheader,
			Mylist,
			Myfooter
		}


	}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}






</style>
