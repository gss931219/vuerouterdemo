<template>
    <div>
        <Cunter></Cunter>
       计数器:<button type="button" @click="dec()">-</button> {{total}}
        <button type="button" @click="inc()">+</button><br/>
        购物车里的金额 :{{this.$store.state.cart.total}}






        <!--<ul>
            <li v-for="(item,index) in $store.getters.getUsers" :key="index">{{item.name}}&#45;&#45;{{item.age}}</li>
        </ul>-->
        <ul>
            <li v-for="(item,index) in getUsers" :key="index">{{item.name}}--{{item.age}}</li>
        </ul>




    </div>
</template>
<script>
    import  {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    import Cunter   from  '../../components/cunter'
    export default {
        name: "index",
        data(){
          return {
              count:0
          }
        },
        methods:{
            //第一种
            // ...mapMutations(['incTotal']),
            //第二种最常用的
            ...mapMutations({
                incTotal111:"incTotal"
            }),
            //第一种
            // ...mapActions(['asyncIncTotal']),
            // 第二种最常用的
            ...mapActions({
                asyncIncTotal:"counter/asyncIncTotal",
                asyncDecTotal:"counter/asyncDecTotal"
            }),
            //增加   incTotal这个方法在main.js中
            inc(){
               // this.$store.commit("incTotal",{total:++this.count})
             // this.incTotal111({total:++this.count})
             // this.$store.dispatch("asyncIncTotal",{total:++this.count})
              this.asyncIncTotal({total:++this.count})

            },
            dec(){
                // this.$store.commit("decTotal",{total:--this.count})
                // this.$store.dispatch("asyncDecTotal",{total:--this.count})
                this.asyncDecTotal({total:--this.count})

            }
        },
        components:{
            Cunter
        },
        computed:{
            //... 扩展运算符
            // 第一种
            // ...mapState(['total'])
            // 第二种
            /*...mapState({
                total:"total"
            })*/
            // 第三种最常用
            ...mapState({
              total:state=>state.counter.total
            }),
            // ...mapGetters(['getUsers'])
            ...mapGetters({
                getUsers:"counter/getUsers"
            }),

        }

    }
</script>

<style scoped>

</style>