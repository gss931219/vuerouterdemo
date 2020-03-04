<template>
    <div>
       个人资料<br/>
        <span @click="outLogin()">安全退出</span>
    </div>
</template>

<script>
    export default {
        name: "ucenter",
        data() {
            return {}
        },
        methods:{
            outLogin(){
                localStorage.clear();
                this.$router.replace('/login')

            }

        },
        //
        beforeRouteEnter(to,from,next){
            if(Boolean(localStorage['isLogin'])){
                next()
            }else{
                next('/login')
            }

        }
    }
</script>

<style scoped>

</style>