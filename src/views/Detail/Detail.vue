<template>
    <div class="bg">
        <div class="film-header">
            <div class="goBack" @click="goBack()">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                    alt=""
                />
            </div>
            <!-- <div class="title">{{detail.name}}</div> -->
        </div>
        <div class="detail">
            <div class="text">
                <div class="img">
                    <img v-lazy="detail.poster" />
                </div>
                <div>
                    <div>{{detail.name}}</div>
                    <div>{{detail.category}}</div>
                    <div>{{detail.premiereAt | parsePremiereAt}}上映</div>
                    <div>{{detail.nation}} | {{detail.runtime}} 分钟</div>
                    <div>
                        {{detail.synopsis}}
                    </div>
                </div>
            </div>
            

            <div class="director">
                <p>演职人员：</p>
                <Swiper :key="'director_' + detail.actors.length">
                    <div v-for="(item,index) in detail.actors" :key="index" class="swiper-slide">
                        <img v-lazy="item.avatarAddress" alt="">
                        <p>{{item.name}}，{{item.role}}</p>
                    </div>
                </Swiper>
            </div>

            <div class="dramaposter">
                <p>剧照：</p>
                <Swiper1 :key="'dramaposter_' + detail.photos.length">
                    <div v-for="(item,index) in detail.photos" :key="index" class="swiper-slide poster">
                        <img v-lazy="item" alt="">
                    </div>
                </Swiper1>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment"
import Loading from "@/components/Loading"
import Swiper from "@/components/Swiper"
import Swiper1 from "@/components/Swiper1"
import {movieDetailData} from "@/api/api"
export default {
    data() {
        return {
            detail:{ actors:[],photos:[] }
        }
    },
    async mounted() {
        let ret = await movieDetailData(this.$route.params.filmId)
        // console.log(ret);
        this.detail = ret.data.data.film
    },
    components:{
        Swiper,
        Swiper1,
    },
    filters:{
        parsePremiereAt:function(value){
            return moment(value * 1000).format('YYYY-MM-DD')
        }
    },
    methods: {
        goBack:function(){
            this.$router.go(-1)
        }
    },
    created() {
        // 发起通知，通知app.vue组件移出底部菜单
        this.eventBus.$emit('footernav',false)
    },
    beforeDestroy() {
        // 发起通知，通知app.vue组件恢复底部菜单
        this.eventBus.$emit('footernav',true)
    },
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.bg{
    background: #f5f5f5;

    .film-header {
        position: fixed;
        top:0;
        background-color: hsla(0, 0%, 100%, 0);
        // background: red;
        color: transparent;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        width: 100vw;
        height: 44px;
        z-index: 10;

        .goBack img {
            width: 30px;
            margin-top: 5px;
            margin-left: 5px;
        }
    }
    .detail {
        .text{
            background: #fff;
        }
        .director{
            background: #fff;
            margin-top: 20px;
            margin-bottom: 5px;
            div {
                img {
                    width: 80px;
                }
                p{
                    font-size: 12px;
                }
            }
        }
        .dramaposter{
            margin-top: 20px;
            background: #fff;
            .poster{
                width: 300px;
                
                margin-right: 10px;
                img{
                    width: 100%;
                }
            }
        }
        padding: 5px;
        .img {
            width: 100%;
            height: 260px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>