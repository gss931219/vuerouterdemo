<template>
    <div>
        <!--动态路由-->
        <ul>
            <li><router-link to="/news/article/1/新闻1">新闻1</router-link></li>
            <li><router-link to="/news/article/2/新闻2">新闻2</router-link></li>
            <li><router-link to="/news/article/3/新闻3">新闻3</router-link></li>
            <li><router-link to="/news/article?id=4 & title=新闻4">新闻4</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"news",
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>