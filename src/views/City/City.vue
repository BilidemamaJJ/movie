<template>
    <div>
        <div class="header-fixed">
            <div class="goBack" @click="goBack()">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                    alt=""
                />
            </div>
            <div class="city-header">
                当前城市
            </div>
            <div class="search">
                <input type="text" placeholder="请输入城市名">
                <button class="button">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg==" alt="">
                </button>
            </div>
        </div>
        <div class="scroll" :style="{height:height + 'px'}">
            <div>
                <div class="hot-city">
                    <span>GPS定位所在城市</span>
                    <div>
                        <!-- <span class="cityGPS-HOT">{{cityGPS}}</span> -->
                        <span class="cityGPS-HOT" style="width:150px;">别点，点了也没用</span>
                    </div>
                    <span>热门城市</span>
                    <div class="HotCities">
                        <span class="cityGPS-HOT" v-for="(item,index) in hotList" :key="index" @click="chooseCity(item)">
                            {{item.name}}
                        </span>
                    </div>
                </div>
                <van-index-bar :index-list="indexList" highlight-color="#ff0000">
                    <template v-for="item in dataList">
                        <van-index-anchor :index="item.index" :key="item.index" style="background:#eee"></van-index-anchor>
                        <van-cell @click="chooseCity(sub)" v-for="(sub,key) in item.data" :title="sub.name" :key="key" />
                    </template>
                </van-index-bar>
            </div>
        </div>
    </div>
</template>

<script>
import {cityListData , setCityGPS} from "@/api/api"
import Vue from "vue";
import "vant/lib/index.css"
import { IndexBar, IndexAnchor, Cell } from "vant";
import BScroll from "better-scroll"
import axios from 'axios'
import {mapState} from 'vuex'

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

export default {
    data() {
        return {
            dataList: [],
            indexList: [],
            cityGPS:'定位中...',
            hotList:[],
            lat: '121.49124909851835',
            lag: '31.379142696763655',
            cityGPSData: [],
        }
    },
    created() {
        this.eventBus.$emit('footernav',false)
        this.height = document.documentElement.clientHeight

    },
    async mounted() {
        let ret = await cityListData();
        this.dataList = ret[0];
        this.indexList = ret[1];
        // console.log(this.dataList);
        
        this.hotList = ret[2];
        // http.get(`https://api.i-lynn.cn/poi?location=${lag},${lat}`)

        // http.get(`https://api.i-lynn.cn/poi?location=121.49124909851835,31.379142696763655`).then((msgGPS)=>{
        //     console.log(msgGPS.data.regeocode.addressComponent.district,msgGPS.data.regeocode.addressComponent.adcode);
        //     let citySetGPS = msgGPS.data.regeocode.addressComponent.district;
        // })

        // let msgGPS = await setCityGPS()
        // this.cityGPSData = await msgGPS.data.regeocode.addressComponent
        // this.cityGPS = await this.cityGPSData.district
        // this.cityGPSId = await this.cityGPSData.adcode
        // console.log(this.dataList);

        // var queryData = this.dataList.filter(function(data){
        //     // return data.cityId === msgGPS.data.regeocode.addressComponent.adcode
        //     return data.data.cityId === '110100'
        // })
        // console.log(queryData);

        // var _this = this;
        // console.log(_this.cityGPS);
        // if (navigator.geolocation){ 
        //     navigator.geolocation.getCurrentPosition( showPosition, geoError); 
        //     // console.log(navigator.geolocation);
        //     // 支持
        //     console.log("支持地理位置接口");
        //     // console.log(lat,lag);

        // } else { 
        //     // alert( "浏览器不支持地理定位。" ); 
        //     // 不支持
        //     console.log("不支持地理位置接口");
        // } 

        // function showPosition(position){
        //     var lat = 121.49124909851835;  //纬度 
        //     var lag = 31.379142696763655;  //经度 
        //     console.log(
        //         lat,lag
        //     );
        //     axios.get(`https://api.i-lynn.cn/poi?location=${lag},${lat}`).then((ret)=>{
        //         _this.cityGPS = ret.data.regeocode.addressComponent.province
        //         // console.log(_this.cityGPS);
	    //         _this.$store.commit('setCity',ret.data.regeocode.addressComponent.province)
        //     })
        //     alert(`纬度:`+position.coords.latitude + ', ' +`经度:`+ position.coords.longitude);
        // }

        // function geoError(error) {
        //         console.log(error)
        //         console.log("Error code " + error.code + ". " + error.message);
        //         switch (error.code) {
        //             case error.PERMISSION_DENIED:
        //                 alert("定位失败,用户拒绝请求地理定位");
        //                 break;
        //             case error.POSITION_UNAVAILABLE:
        //                 alert("定位失败,位置信息是不可用");
        //                 break;
        //             case error.TIMEOUT:
        //                 alert("定位失败,请求获取用户位置超时");
        //                 break;
        //             case error.UNKNOWN_ERROR:
        //                 alert("定位失败,定位系统失效");
        //                 break;
        //         }
        //     }
    },
    updated() {
        this.bs = new BScroll('.scroll',{
            // 激活上滑的监听事件
            pullUpLoad: true,
            // 激活下滑的监听事件
            // pullDownRefresh: true,
            // 默认情况下使用bs后，它会禁止浏览器的点击事件
            click: true,
        })
    },
    beforeDestroy() {
        this.eventBus.$emit('footernav',true)
    },
    methods: {
        // 获取选择的城市名称
        chooseCityGPS:function(cityGPS){
            var city = cityGPS
            this.$store.commit('setCity',city)
            this.$router.go(-1)
        },
        chooseCity: function(sub){
            this.$store.commit('setCity',sub)
            this.$router.go(-1)
        },
        
        goBack:function(){
            this.$router.go(-1)
        },
        // 自动获取当前定位城市

    },
}
</script>

<style lang="scss" scoped>
    .scroll{
        overflow: hidden;
    }
    .header-fixed{
        width: 100%;
        position: fixed;
        background: #fff;
        top: 0;
        z-index: 1123;
    }
    .goBack{
        background-color: hsla(0, 0%, 100%, 0);
        color: transparent;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        width: 50px;
        height: 44px;
        position: absolute;
        z-index: 1124;
        img{
            width: 30px;
            margin-top: 5px;
            margin-left: 5px;
        }
    }
    .city-header{
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: relative;
        top: 0;
    }
    .search{
        height: 50px;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .button{
            position: absolute;
            right: 55px;
            border: none;
            outline: none;
            background: #fff;
            img{
                width: 18px;
                height:18px;
                transition: 1s;
            }
        }
        input{
            height: 30px;
            width: 300px;
            text-indent: 15px;
            font-size: 15px;
            border: none;
            border-radius: 15px;
            &:focus{
                outline: none;
                box-shadow: 0 0 8px deepskyblue;
            }
        }
    }
    .hot-city{
        padding-top: 110px;
        margin-left: 10px;
        // height: 200px;
        span{
            height: 30px;
            line-height: 30px;
            font-size: 15px;
        }
        .cityGPS-HOT{
            display: block;
            width: 100px;
            border-radius: 3px;
            text-align: center;
            color: #323233;
            background: #f1f1f1;
            margin-left: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .HotCities{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
    }
</style>