<template>
    <div>
        <Swiper  :key="'film_' + cinemaFilmData.filmId">
            <div v-for="(item,index) in cinemaFilmData" :key="index" class="swiper-slide">
                <img :src="item.poster" alt=""  class="poster">
            </div>
        </Swiper>
        <div class="detailBox">
            <div v-for="(item,index) in cinemaFilmData" :key="index" class="detail">
                <p>
                    <span class="filmName">{{item.name}}        </span>
                    <span class="filmGrade"><i>{{item.grade}}</i>    分</span>
                </p>
                <p class="director">
                    <span>{{item.category}} | </span>
                    <span>{{item.runtime}}分钟 | </span>
                    <span>{{item.director}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "@/components/Swiper1"
import {cinemaDetailData , cinemaFilmDetailData} from "@/api/api"

export default {
    data() {
        return {
            cinemaFilmData: [],
        }
    },
    async mounted() {
        let filmData = await cinemaFilmDetailData(this.$route.params.cinemaId)
        this.cinemaFilmData = filmData.data.data.films

        // console.log(this.cinemaFilmData);
    },
    updated() {
        // this.eventBus.$on('changefilm'[progress,callback])
    },
    components:{
        Swiper,
    },
    methods: {
        handleindex(){
            // this.setCinemaFilmId(this.indexoo)
            console.log(11111);
        }
    },
}
</script>

<style lang="scss" scoped>
    .detailBox{
        .detail{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{  
                margin-top: 10px;
                width: 300px;
                text-align: center;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                .filmName{
                    font-size: 17px;
                }
                .filmGrade{
                    font-size: 14px;
                    color: #ffb232;
                }
            }
            .director{
                color: #797d82;
                font-size: 13px;
            }
        }
    }
</style>