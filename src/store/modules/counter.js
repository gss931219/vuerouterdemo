// 计数器
let modules={
    //命名空间
    namespaced:true,
    state:{
        total:0,
        users:[
            {name:"张三",age:30},
            {name:"李四",age:20},
            {name:"王五",age:18},
        ]
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
    //相当于vue中的computed计算属性
    getters:{
        getUsers(state){
            let users= state.users.filter((item)=>{
                return item.age>18
            })
            return users;
        }
    },
};
export default modules
