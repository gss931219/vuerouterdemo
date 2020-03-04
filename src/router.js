import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import IndexPage from  './pages/index/index'
import NewsPage from  './pages/news/index'
import ArticlePage from  './pages/article/index'
import GoodsPage from  './pages/goods/index'
import GoodsItem from  './pages/goods/item'
import GoodsContent from  './pages/goods/content'
import GoodsReview from  './pages/goods/review'
import LoginPage from './pages/login/index'
import ucenterPage from './pages/ucenter/index'
import profilePage from './pages/ucenter/profile'
import classifyPage from './pages/classify/index'
import skipPage from './pages/skip'
import timePage from './pages/time/index'
import vuexPage from './pages/vuex/index'



export default new Router({
    mode:"hash", //1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL, //自动获取根目录路径
    routes:[
        {
            path:"/",
            name:"home",
            component:IndexPage
        },
        {
            path:"/news",
            name:"news",
            component:NewsPage
        },
        {
            path:"/news/article/:id/:title",
            name:"article",
            component:ArticlePage
        },
        {
            path:"/goods",
            name:"goods",
            component:GoodsPage,
            redirect:"/goods/item",//重定向
            children:[
                {
                    path:"item",
                    name:"item",
                    component:GoodsItem,
                },
                {
                    path:"content",
                    name:"content",
                    component:GoodsContent,
                },
                {
                    path:"review",
                    name:"review",
                    component:GoodsReview,
                },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:LoginPage
        },
        {
            path:"/ucenter",
            name:"ucenter",
            component:ucenterPage,
            meta:{auth:true}
        },
        {
            path:"/profile",
            name:"profile",
            component:profilePage,
            //路由独享的守卫(路由内的钩子)
            // beforeEnter:(to,from,next)=>{
            //     if(Boolean(localStorage['isLogin'])){
            //         next()
            //     }else{
            //         next('/login')
            //     }
            // }
        },
        {
            path:"/classify",
            name:"classify",
            component:classifyPage,
        },
        {
            path:"/skip",
            name:"skip",
            component:skipPage,
        },
        {
            path:"/time",
            name:"time",
            component:timePage,
        },
        {
            path:"/vuex",
            name:"vuex",
            component:vuexPage,
        },
    ]
})
