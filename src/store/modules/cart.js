// 计数器
let modules={
    namespaced:true,
    state:{
        total:0,

    },
    //同步操作方法
    mutations:{
        incTotal(state,payloay){
            console.log(state,payloay);
            state.total = payloay.total;
        },
        decTotal(state,payloay){
            state.total = payloay.total;
        }
    },
    //异步操作
    actions: {
        // 怎么调用它，在inc方法中写
        // 增加
        asyncIncTotal(conText,payload){
            console.log(conText,payload)
            conText.commit("incTotal",payload)
        },
        // 减少
        asyncDecTotal(conText,payload){
            console.log(conText,payload)
            conText.commit("decTotal",payload)
        },
    },

};
export default modules
