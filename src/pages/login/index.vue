<template>
   <div>
       用户名:<input type="text"  v-model="username" /><br/>
       密码:<input type="text"  v-model="password" /><br/>
       <button type="button" @click="login()">登录</button>
   </div>
</template>

<script>
import  {mapMutations}  from 'vuex'
    export default {
        name: "login",
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods:{
            ...mapMutations({
                storeLogin:"user/login"

            }),
            login(){
                if(this.username.match(/^\s*$/)){
                    alert('请输入用户名')
                     return;
                }
                if(this.password.match(/^\s*$/)){
                    alert('请输入密码')
                    return;
                }
                let url = process.env.VUE_APP_API
                    +"/home/user/pwdlogin?token="+process.env.VUE_APP_TOKEN
                this.$request(url,"post",{
                    cellphone:this.username,
                    password:this.password}).then(res=>{
                    console.log(res);
                    if(res.code==200){

                        //把值存到vuex中
this.storeLogin ({nickname:res.data.niname,isLogin:true})


                        this.$router.replace('/')
                    }else{
                        alert(res.data)
                    }


                });




            },

        }
    }
</script>

<style scoped>

</style>