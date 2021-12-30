<template>
<div id="root">
	<TopNav></TopNav>
	<SubNav></SubNav>
	<ListMovies></ListMovies>
</div>
</template>

<script>
	import TopNav from  './components/TopNav.vue'
	import SubNav from  './components/SubNav.vue'
	import ListMovies from './components/ListMovies.vue'


	export default {
		name:'App',
		data(){
			return{
              
			}
		},
		
		components:{
			TopNav,
			SubNav,
			ListMovies,		
			
		},
		mounted() {
		
		},
		beforeDestroy(){
		},
		
	}
</script>

<style>
.w{
   width: 1050px;
   margin: 0 auto;
}
</style>
