<template>
    <div>
        <span>
            <router-link to="/">首页</router-link>
        </span>
        计数器：{{count}}

        <div class="box" v-show="isShow">
            <span @click="isShow=false">x</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               count:0,
                isShow:true
            }
        },
        methods:{

        },
        created(){
            this.timer=setInterval(()=>{
               console.log(this.count++)
            },1000)
        },
        //点击首页，弹出“请关闭弹出在跳转页面”的弹窗，点击红色放框上面的x，
        //关闭弹框，再次点击首页，回到首页
        beforeRouteLeave(to,from,next){
            // clearInterval(this.timer)
                if(this.isShow){
                    alert("请关闭弹出在跳转页面")
                }else{
                    next()
                }

        },
        //页面离开的时候执行   首选
        destroyed(){
            clearInterval(this.timer)
        }

    }
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background-color: red;
    color: #ffffff;
}
</style>