<template>
<div id="root">
	<div>
		<button @click="getStudents">获取学生信息</button>
	</div>

</div>
</template>

<script>
import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:5000/students').then(
					response=>{
						console.log('请求成功了',response.data)
					},
					error=>{
						console.log('请求成功了',error.message)
					}
				)
			}	
		},
	
		
		
	}
</script>

<style>

</style>
