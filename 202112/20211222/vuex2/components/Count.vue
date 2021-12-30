<template>
	<div>
		<h1>当前求和为:{{sum}}</h1>
		<h1>放大10倍的值:{{bigSum}}</h1>
		<h1>我在{{school}}，学习{{subject}}</h1>
		<h1 style="color:red">persons组件的人数是:{{personList.length}}</h1>
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
			//第二种写法  对象写法
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

            //第二种写法  对象写法
			...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
		},
		computed:{
			//第三种  数组的写法
			...mapState('countAbout',['sum' ,'school','subject']),
			// ...mapState(['presonAbout']),
			...mapState('presonAbout',['personList']),
			...mapGetters('countAbout',['bigSum'])
		},
		mounted(){
			// console.log(this.$store.state.presonAbout.personList)
		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
