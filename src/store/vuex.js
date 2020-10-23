import Vue from 'vue'
import Vuex from 'vuex'
import cinema from '../router/routes/cinema';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // state 存数据 取数据
        count: 0,
        city: '',
        cityId:'310100',
        citySetGPS: '定位中',
        cinemaFilmId:0,
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
            state.cityGPS = sub.name

        },
        updateToken(state,_token){
            state._token = _token
            localStorage.setItem("_token",_token)
        },
        logoutDelToken(state){
            state._token  = '';
            window.localStorage.removeItem('_token')
        },
        setCinemaFilmId(state,_index){
            state.cinemaFilmId = _index;
        }
        // getCurrentPosition(state,position){

        // }
    },
    actions:{
        // actions 中可以写异步方法
        addAsync: function(context,step){
            setTimeout(()=>{
                context.commit('add',step)
            },2000)
        },
    },
    getters:{
        // state中的数据发生变化，getters中的数据也会随之变化
        getCount(state){
            return '当前总数是' + state.count
        }
    }
})