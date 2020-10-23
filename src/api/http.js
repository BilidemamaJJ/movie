// 封装`axios`网络请求  添加请求拦截器  ??require
import axios from 'axios'

// 设置基础域名
axios.defaults.baseURL = "https://m.maizuo.com/"

// 请求拦截器处理，添加2个请求头
axios.interceptors.request.use(function(config){
    let host = ""
    let info = config.headers.info

    if(info == "film"){
        host = "mall.film-ticket.film.list"
    }
    if(info =="cinemaList"){
        host = "mall.film-ticket.cinema.list"
    }
    if(info == "info"){
        host = "mall.film-ticket.film.info"
    }
    if(info == "city"){
        host = "mall.film-ticket.city.list"
    }
    if(info == "cinemaDetail"){
        host = "mall.film-ticket.cinema.info"
    }
    if(info == "cinemaFilmDetail"){
        host = "mall.film-ticket.film.cinema-show-film"
    }

    if(config.headers.authorization){
        config.headers= {
            authorization:config.headers.authorization
        }
    }else{
        config.headers={
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602242727404225142030338","bc":"110100"}',
            "X-Host": host
        }
    }

    return config
},function(err){
    // 错误处理
})

// 导出封装好的axios
export default axios