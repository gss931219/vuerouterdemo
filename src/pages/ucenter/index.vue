<template>
    <div>
        欢迎{{$store.state.user.nickname}}
       <br/>
        <span @click="outLogin()">安全退出</span>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "ucenter",
        data() {
            return {}
        },
        methods:{
            ...mapMutations({
                storeOutLogin:"user/outLogin"
            }),
            outLogin(){
                this.storeOutLogin()
                this.$router.replace('/login')

            }
        }
    }
</script>

<style scoped>

</style>