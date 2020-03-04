<template>
    <div>
         <button type="button" @click="$router.go(-1)">返回</button>
         <!--商品详情 评价运用了主子路由的知识-->
        <ul class="qiangqing">
             <li @click="goPage('/goods/item')">商品</li>
             <li @click="goPage('/goods/content')">详情</li>
             <li @click="goPage('/goods/review')">评价</li>
         </ul>
         <div>
             <!--渲染页面 router-view-->
           <router-view></router-view>
         </div>
    </div>
</template>

<script>
    export default {
        name: "goods",
        data(){
            return{

            }
        },
        created(){
            //this.$route  接收参数
            console.log(this.$route.query.gid,this.$route.query.title)
            // console.log(this.$route.params.gid,this.$route.params.title)
        },
        methods:{
            goPage(url){
                this.$router.replace(url)
            }
        }
    }
</script>

<style scoped>
    .qiangqing{
        width: 100%;
        display: flex;
        text-decoration: none;
        list-style: none;
        /*justify-content: space-between;*/
    }
    .qiangqing li{
      padding: 0px 5px;
    }
</style>