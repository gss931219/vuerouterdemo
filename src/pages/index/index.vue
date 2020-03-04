<template>
    <div>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/news">新闻</router-link></li>
            <!--<li @click="goPage('/goods',{gid:1,title:'商品'})">商品</li>-->
            <!--<li @click="goPage2('/goods?gid=1&title=商品')">商品</li>-->
            <li @click="$router.push('/goods?gid=1&title=商品')">商品</li>
           <li @click="$router.push('/login')">会员登录</li>
           <li @click="$router.push('/ucenter')">会员中心</li>
           <li @click="$router.push('/profile')">个人资料</li>
           <li @click="$router.push('/classify?id=1')">商品分类</li>
           <li @click="$router.push('/time')">定时器</li>
           <li @click="$router.push('/vuex')">vuex演示</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            //this.$router 传参
            goPage(url,param){
               this.$router.push({path:url,query:param})
                // this.$router.push({name:"goods",params:param})

            },
            goPage2(url){
                this.$router.push(url)

            }
        }
    }
</script>

<style scoped>

</style>
