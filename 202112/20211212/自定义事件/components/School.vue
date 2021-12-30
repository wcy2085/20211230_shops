<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<!--第一种方式：1.4，点击设置新的子组件的函数 -->
		<button @click='sendShoolName'>点击</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'bdqn',
				address:'北京',
			}
		},
		// 第一种方式：1.3 接收父组件传过来的函数，以待后面使用
		props:['getSchoolName1'],
		methods:{
			// 第一种方式：1.5 子组件函数的目的是使用输出父组件传过来的函数
			sendShoolName(){
				this.getSchoolName1(this.name)
			}
		}
	}
</script>

<style>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>