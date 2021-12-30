<template>
	<div>
    <div class="wrapper">
      <BlankContent></BlankContent>
    </div>

  </div>
</template>

<script>
import  BlankContent from './components/BlankContent'

	export default {
		name:'App',
    components:{
      // RootText,
      BlankContent
     
    }
	}
</script>

<style>
.wrapper{
  /* width: 1000px; */
  margin: 0 auto;
}
</style>
