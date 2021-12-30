<template>
    <div id="SubNavWrapper" class="w">
        <ul class="SubNavList" >
            <li v-for="(sub,index) in sublist " :key='index' @click='handelColor(index)'>
                <a href="javascript:;"  :class='{active:cIndex===index}'>{{sub}}</a>
            </li>   
         </ul> 
    </div>
</template>

<script>
export default {
    name:'SubNav',
    data(){
        return{
            cIndex:2,
            sublist:['热评口碑榜','最受期待榜','国内票房榜']
        }
    },
    methods: {
        handelColor(index){
           this.cIndex=index
        }
    },

}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#SubNavWrapper{
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

}
.SubNavList{
    display: flex;
    line-height: 40px;
}
.SubNavList li{
    list-style: none;
    margin-right: 50px;  
}
.SubNavList li a{
    display: block;
    text-decoration: none;
    color: rgb(89, 88, 88);
}
.active{
    border-bottom: 3px solid tomato; 
    color: tomato !important;
}

</style>