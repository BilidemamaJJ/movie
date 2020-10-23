//  调用封装的`axios`  发送具体的数据请求
//导入需要使用的模块
import http from '@/api/http' 
import { playingNowListUrl , comingSoonListUrl , movieDetailUrl , cinemaUrl , cityListUrl , loginUrl , centerUserInfoUrl , cityGPSUrl , cinemaDetailUrl , cinemaFilmDetailUrl} from "@/config/url"

// 请求正在热映列表
export const playingNowListData = (pageNum)=>{
    http.defaults.headers.authorization = "";
    http.defaults.headers.info = "film"
    return http.get(playingNowListUrl + pageNum)
}

// 请求即将上映列表
export const comingSoonListData = (pageNum)=>{
    http.defaults.headers.authorization = "";
    http.defaults.headers.info = "film"
    return http.get(comingSoonListUrl + pageNum)
}

// 请求详情页
export const movieDetailData = (filmId)=>{
    http.defaults.headers.info = "info"
    http.defaults.headers.authorization = "";
    return http.get(movieDetailUrl + filmId)
}

// 请求影院列表页
export const cinemaData = (cityId)=>{
    http.defaults.headers.info = 'cinemaList'
    http.defaults.headers.authorization = "";
    return http.get(cinemaUrl + cityId)
}

// 请求城市列表
export const cityListData = async ()=>{
    http.defaults.headers.info = "city"
    http.defaults.headers.authorization = "";
    let ret = await http.get(cityListUrl)
    let cities = ret.data.data.cities;
    let cityIndex = []; // 'A','B','C',...(完整的26个字母)
    let dataList = [];  // 城市信息
    let indexList = []; // 'A','B','C',...（经过筛选的字母）
    let hotList = []; // 热门城市

    //for循环生成26个字母
    for (let i = 65; i <= 90; i++) {
        cityIndex.push(String.fromCharCode(i));
    }

    cityIndex.forEach((index) => {
        let tmpArr = cities.filter(
            (item) => index.toLowerCase() == item.pinyin.substr(0, 1)
        );
        if (tmpArr.length > 0) {
            indexList.push(index);
            dataList.push({
                index,
                data: tmpArr,
            });
        }
    });

    for(var i=0;i<cities.length; i++) {
        if(cities[i].isHot === 1){
            hotList.push( cities[i]);
        }
    }

    return Promise.resolve([dataList, indexList , hotList]);
}

// 请求登录
export const loginData = (data)=>{
    return http.post(loginUrl,data)
}

// 请求个人中心用户信息
export const centerUserInfoData = (_token)=>{
    http.defaults.headers.authorization = _token
    // 对gender的操作 响应拦截
    // http.interceptors.response.use(function(response){
    //     response.data.user_info.gender = response.data.user_info.gender ? "男" : "女"
    //     return response
    // },function(error){
    //     // 对错误的处理
    // })
    return http.get(centerUserInfoUrl)
}

// 请求GPS定位城市
export const setCityGPS = ()=>{
    return http.get(cityGPSUrl)
}

// 请求影院详情页数据
export const cinemaDetailData = (cinemaId)=>{
    http.defaults.headers.info = 'cinemaDetail'
    http.defaults.headers.authorization = "";
    return http.get(cinemaDetailUrl + cinemaId)
}
// 请求影院详情页电影的数据
export const cinemaFilmDetailData = (cinemaId)=>{
    http.defaults.headers.info = 'cinemaFilmDetail'
    http.defaults.headers.authorization = "";
    return http.get(cinemaFilmDetailUrl + cinemaId)
}