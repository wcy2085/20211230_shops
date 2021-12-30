<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<!-- 子传父，第一种方式：通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<!-- 1.2：动态绑定好函数，然后去子组件里配置 -->
		<school  :getSchoolName1='getSchoolName1'></school>

		<!-- 子传父，第二种方式：通过父组件给子组件绑定一个自定义事件：子给父传递数据 -->
		<!-- 给student的实例对象vc上绑定了一个bdqn的事件，事件名是：getStudentName 
		       如果后面触发了bdqn，则就会执行getStudentName，你给谁绑定事件，就去哪里触发事件去-->
		<!-- 2.1 给student这个实例对象绑定一个bdqn的自定义事件 -->
		<student @bdqn='getStudentName1'   @demo='m1'></student>



		<!-- 子传父，第三种方式：给student这个实例对象 打一个标签 -->
		<!-- <student ref='student'></student> -->

	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
			}
		},
		methods:{
			// 第一种方式：1.1建立父组件函数，目的是拿到子组件的数据，学校的名字
			getSchoolName1(name){
				console.log("获取子组件的学校名字",name)
			},

			// 第二种方式：2.2建立父组件函数，目的是拿到子组件的数据，学校的名字
			getStudentName1(name,...pra){//这是接受更多的数据
				console.log("获取子组件的学生名字",name,pra)
			},	
			
			m1(){
				console.log('m1被触发了')
			}
		},
		// app挂载完毕函数
		mounted(){
			// 3.1拿到实例对象vc，然后绑定$on，绑定自定义事件，然后执行函数
        //   this.$refs.student.$on('bdqn',this.getStudentName1)
		//   这种方式，比较灵活，可以加定时器，或者等ajax请求数据回来后
	/* 	setTimeout(()=>{
          this.$refs.student.$on('bdqn',this.getStudentName1)
		},3000) */
		}

	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
