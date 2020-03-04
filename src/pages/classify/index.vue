<template>
    <div>
        <ul>
            <li @click="goPage('/classify?id=1')">潮流女装</li>
            <li @click="goPage('/classify?id=2')">品牌男装</li>
            <li @click="goPage('/classify?id=3')">数码产品</li>
            当前的ID:{{id}}

        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
              id:this.$route.query.id
            }
        },
        methods:{
           goPage(url){
               this.$router.replace('/skip')
               setTimeout(()=>{
                   this.$router.replace(url)
               },100)
           }

        },
        created(){
            // console.log(this.$route.query.id)
        },
        //
       /* beforeRouteUpdate(to,from,next){
            // setTimeout(()=>{
                console.log(this.$route.query.id)
                this.id= this.$route.query.id
            // },100)
            next();
        },*/

    }
</script>

<style scoped>

</style>