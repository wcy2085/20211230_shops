<template>
    <div class="wrapper">
        <div class="rootTest" @mousedown='handelDown($event)' ref="rootTest">
             <span class="test" >文本</span>
        </div>
        <div class="blankCon" ref="blankCon">
            <!--  <div class="rootTest"  >
                 <span class="test" >文本</span>
            </div>
             <div class="rootTest" >
                 <span class="test" >文本</span>
            </div> -->   
        </div>
    </div>
  
</template>

<script>
// mousedown、mousemove、mouseup
export default {
    name:'BlankContent',
    methods: {  
        handelDown(e){
        //    e.clientX,e.clientY 鼠标按下的位置
           var mouseDownX=e.clientX
           var mouseDownY=e.clientY
           
           //获取blankCon 空白文档的左边，上边的偏移量
            var blankConLeft=this.$refs.blankCon.offsetLeft
            var blankConTop=this.$refs.blankCon.offsetTop
            // console.log(blankConLeft,blankConTop)

          //保存this
           var that=this
           //鼠标移动事件
           window.onmousemove=function(event){
               //鼠标移动的坐标
               var mouseMoveX=event.clientX
               var mouseMoveY=event.clientY 
      
               that.$refs.rootTest.style.left=mouseMoveX-mouseDownX+'px'
               that.$refs.rootTest.style.top=mouseMoveY-mouseDownY+'px'

                //获取rootTest的左边，上边的偏移量
                var left=that.$refs.rootTest.offsetLeft
                var top=that.$refs.rootTest.offsetTop

                /*  若偏移量大于空白文档的偏移量，则在空白文档里新添加一个一样的文本框
                      同时让根文本框回到原位 */

                if(left>=blankConLeft&&top>=blankConTop){
                    createTest()      
                }
           }
           function createTest(){
                var str=`<div class='rootTest'>
                            <span>文本111</span>
                        </div>`
                    that.$refs.blankCon.innerHTML=str
           }

            //鼠标松开事件
            window.onmouseup=function(){
                window.onmousemove=null
            that.$refs.rootTest.style.left=0
            that.$refs.rootTest.style.top=0
            }
          
        },
    },

}
</script>

<style scoped >
.wrapper{
    display: flex;
    /*  */
}
.blankCon{
    width: 500px;
    height: 800px;
    border: 1px solid black;

    /* position: absolute; */

}
.rootTest{
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 1px solid red;
  margin-right: 10px;
  margin-bottom: 1px;
  position: relative;
  /* position: absolute; */
}
.test{
  font-size: 30px;
}

</style>