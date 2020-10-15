<template>
    <div>
        <Loading v-if="loading"></Loading>
        <CinemaListTopNav class="fixed"></CinemaListTopNav>
        <ul class="cinemalists">
            <li v-for="(item,index) in cinemas" :key="index" class="li">
                <div class="nap">
                    <span class="name">{{item.name}}</span>
                    <span class="price">￥<i>{{item.lowPrice / 100}}</i>起</span>
                </div>
                <div class="loca">
                    <span class="address">{{item.address}}</span>
                    <!-- <span class="distance">{ { item.Distance } } km</span> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import CinemaListTopNav from "@/components/CinemaListTopNav"
import {cinemaData} from "@/api/api"
import Loading from "@/components/Loading"
// import loaction from "https://api.i-lynn.cn/poi?location=121.49124909851835,31.379142696763655"
export default {
    data() {
        return {
            loading:true,
            cinemas:[],
        }
    },
    components:{
        CinemaListTopNav,
        Loading,
    },
    async mounted() {
        let ret = await cinemaData()
        this.cinemas = ret.data.data.cinemas

        if(this.cinemas.length > 0){
            this.loading = false
        }else{
            this.loading = true
        }
    },
    // beforeCreate() {
    //     if(this.cinemas.length > 0){
    //         this.loading = false
    //     }else{
    //         this.loading = true
    //     }
    // },
    // filters:{
    //     parseDistance: function(value){
    //         return Math.ceil(value*100)/100
    //     }
    // },
    
    methods: {
        // location: async function(){
        //     let trap = await cinemaData()
        // }
        
        // update:function (position) {
        //     window.addEventListener('load', function() {
        //         if (navigator.geolocation) {
        //         navigator.geolocation.watchPosition(update);
        //     }
        //     }, false)
        //     var lat = position.coords.latitude;
        //     var lng = position.coords.longitude;
        //     return {lat,lng}
        // }
    },
}
</script>

<style lang="scss" scoped>
    .fixed{
        position: fixed;
        top: 0;
        background: #fff;
    }
    .cinemalists{
        margin-top: 80px;
        .li{
            padding: 15px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #ededed;
            .nap{
                display: flex;
                justify-content: space-between;
                color: #18191a;
                .name{
                    font-size: 16px;
                    font-weight: 600;
                }
                .price{
                    color: #ff5f16;
                    font-size: 12px;
                    i{
                        font-size: 15px;
                        font-style: normal;
                    }
                }
            }
            .loca{
                margin-top: 5px;;
                display: flex;
                justify-content: space-between;
                font-size: 13px;
                color: #797d82;
                .address{
                    width: 260px; 
                    text-overflow: ellipsis; 
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
    
</style>