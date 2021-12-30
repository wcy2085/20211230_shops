<template>
	<div>
		<h1>当前求和为:{{sum}}</h1>
		<h1>放大10倍的值:{{bigSum}}</h1>
		<h1>我在{{school}}，学习{{subject}}</h1>
		<h1 style="color:red">persons组件的人数是{{personList.length}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字 默认值	
			}
		},
		methods: {
			// 第一种写法
			/* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */
			//第二种写法  对象写法
			...mapMutations({increment:'JIA',decrement:'JIAN'}),
			//第三种写法  数组写法  同样的模版中也要改称'JIA（n）','JIAN（n）'
			// ...mapMutations(['JIA','JIAN']),

			// 第一种写法
		/* 	incrementOdd(){	
				this.$store.dispatch('jiaOdd',this.n)		
			},
			incrementWait(){		
				this.$store.dispatch('jiaWait',this.n)	
			}, */
            //第二种写法  对象写法
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
			//第三种写法  数组写法  同样的模版中也要改称'jiaOdd(n)','jiaWait(n)'
			// ...mapActions(['jiaOdd','jiaWait'])	
		},
		computed:{
			//第一种计算属性的写法
			/* sum(){
				return this.$store.state.sum
			},
			bigSum(){
				return this.$store.getters.bigSum
			},
			school(){
				return this.$store.state.school
			},
			subject(){
			  return this.$store.state.subject
			} */
			//第二种 对象的写法
			// ...mapState({sum:'sum',school:'school',subject:'subject'}),
			//第三种  数组的写法
			...mapState(['sum' ,'school','subject','personList']),
			...mapGetters(['bigSum'])

		},
		mounted(){
			// console.log(this.$store)
		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
