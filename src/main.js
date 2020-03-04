import Vue from 'vue'
import 'url-search-params-polyfill';
import App from './App.vue';
import store from './store'
import router from './router.js';
import {request} from './assets/js/libs/request.js';



Vue.config.productionTip = false

Vue.prototype.$request=request;

//全局前置守卫
router.beforeEach((to,from, next)=>{
    if(to.meta.auth){
          if(Boolean(localStorage['isLogin'])){
              next()
          }else{
              next('/login')
          }
    }else{
        next();
    }
})

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
