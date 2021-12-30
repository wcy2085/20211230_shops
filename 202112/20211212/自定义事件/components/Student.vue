<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<!-- 2.3 建立一个函数，在函数里，触发实例对象身上的事件 -->
		<button @click='sendStudentName'>传递学生名给父组件</button>
		<button @click='unbind'>解绑自定义事件</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		methods:{
			sendStudentName(){
				// 2.4:触发实例对象student身上的自定义事件
				this.$emit('bdqn',this.name)
				this.$emit('demo')

			},
			unbind(){
                // this.$off('bdqn')//解绑一个定义事件
                // this.$off(['bdqn','demo'])//解绑多个定义事件
				this.$off()//解绑所有的自定义事件

			}
		}
	}
</script>

<style>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
