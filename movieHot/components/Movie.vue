<template>
   <div class="moviewrapper w">
       <ul class="movie">
           <li class="movieNumber" :class="{active:currentIndex===index}">{{movie.number}}</li>
           <li class="movieImg"><img :src='movie.src' alt=""></li>
           <li class="moviecont">
               <div class="textInfo">
                   <p class="name">{{movie.name}}</p>
                   <p class="starting">主演：{{movie.starting}}</p>
                   <p class="time">上映时间：{{movie.time}}</p>
               </div>
               
               <div class="boxOffice">
                   <span class="box">总票房:</span> 
                   <span class="office">{{movie.boxoffice}}万</span>
               </div>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
    name:'Movie',
    props:['movie','index'],
    data() {
        return {
             currentIndex:0
        }
    },
}
</script>

<style  scoped>
*{
     margin: 0;
    padding: 0;
}
ul li{
    list-style: none; 
}
.movie{
    height: 265px;
    display: flex;
    align-items: center;
}
.movieNumber{
    line-height: 50px;
    height: 50px;
    width: 50px;
    background-color: #9d9d9d;
    text-align: center;
    font-size: 18px;
    margin: 0 50px 0 50px;
    color: white;
}
.movieImg img{
    width: 160px;
    height: 220px;
    margin-right:50px;

}
.moviecont{
    display: flex;
    width: 605px;
    height: 220px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ccc;
   

}
.textInfo .name{
   font-size: 26px;
}
.textInfo .starting{
   font-size: 20px;
   color:#666666
}
.textInfo .time{
   font-size: 16px;
   color: #b29999;
}

.boxOffice .box{
   font-size: 18px;
   color:#ef4238 ;
   margin-right:10px;
}
.boxOffice .office{
   font-size: 26px;
   color:#ef4238 ;
}
.active{
    background-color: tomato;
}


</style>