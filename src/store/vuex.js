import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // state 存数据 取数据
        count: 0,
        city: '未知城市',
        cityId:'110100',
    },
    mutations:{
        // 对数据的更改操作，修改作用
        // 在vuex中，只能通过mutation变更store中的数据，不可以对store中的数据进行直接操作
        // 方法名
        // 不要在mutation中写异步方法
        add: function(state,step){
            state.count += step;
        },
        setCity(state,sub){
            state.city = sub.name
            state.cityId = sub.cityId
        },
        updateToken(state,_token){
            state._token = _token
            localStorage.setItem("_token",_token)
        },
        logoutDelToken(state){
            state._token  = '';
            window.localStorage.removeItem('_token')
        },
        // getCurrentPosition(state,position){

        // }
    },
    actions:{
        // actions 中可以写异步方法
        addAsync: function(context,step){
            setTimeout(()=>{
                context.commit('add',step)
            },2000)
        }
    },
    getters:{
        // state中的数据发生变化，getters中的数据也会随之变化
        getCount(state){
            return '当前总数是' + state.count
        }
    }
})