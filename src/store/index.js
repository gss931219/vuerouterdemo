import  Vue from 'vue'
import Vuex from 'vuex'

import  counter from './modules/counter';
import  cart from './modules/cart';
import  user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
       counter:counter,
       cart,
       user
   }
})