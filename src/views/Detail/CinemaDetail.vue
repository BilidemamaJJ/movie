<template>
    <div>
        <div>
            <div class="goback" >
                <span @click="goBack()" v-show="!showtags">
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg==" alt="">
                </span>
                <span v-show="showtags" @click="closeShowtags()" class="closeTags">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAQlBMVEVHcEwZGxsfHx8ZGhsZHh4ZGhsZHx////8aGhsZGhsbGxsaGhwcHBwYGRoZGhwaGhsaGh0aGh4bGxsZGhwZGhwZGhuZ90I0AAAAFXRSTlMAnRDlO/MoAZznQYY1+qvEVjpx0NGKQfLiAAAA8klEQVRIx+3WSQ6DMAwFUIbSUKAMbXP/q5apAoMdf0di1ywtniwF+0OS/M/F55XXDnpweHcZKeTelwi9Fd73pFJ7iE7wQXu6EqEzvB+KCGUhQgWoUxFqNADDNAhDVIEyVaFEAchTCHIUhGcKwyM1QEpNcE+NcKNm+KMRcKXPCLjSGDheztjRty4CFlNPLBHPs9pG0OVWsURkt8NMt/dopPsBMFE6OQZ6HDmYnmcVpNyQQ5TfDoBKa6VSeR8VGlrkmaYu4muVuFSkWnSIVM8cgSJhxdIBSrmF0toHC6uZVqTUgSk30YZUsj4Dl7dq/n/Jl58vF/caAGebDs0AAAAASUVORK5CYII=" alt="">
                </span>
            </div>
            <div class="headerTitle">
                <h3>{{cinemaData.name}}</h3>
            </div>
            <ul class="tags" v-if="cinemaData.services" @click="showtagsdetail()" v-show="!showtags">
                <li v-for="(tags,index) in cinemaData.services" :key="index" class="tagsli">
                    {{tags.name}}
                </li>
                <span>&gt;</span>
            </ul>
            <ul class="tagsdetail" v-show="showtags">
                <li v-for="(tags,index) in cinemaData.services" :key="index">
                    <div class="tagname">{{tags.name}}</div>
                    <div class="tagdetail">{{tags.description}}</div>
                </li>
            </ul>
            <div class="address" v-show="!showtags">
                <span>
                    <img src="data:image/png;base64,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" alt="">
                    <p>{{cinemaData.address}}</p>
                </span>
                <span class="spanleft">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC" alt="">
                </span>
            </div>
            <Cinemafilm v-show="!showtags"></Cinemafilm>
        </div>
    </div>
</template>

<script>
import {cinemaDetailData , cinemaFilmDetailData} from "@/api/api"
import Cinemafilm from '@/components/Cinemafilm'
export default {
    data() {
        return {
            cinemaData:[],
            showtags: false,
            // cinemaFilmData: [],

            // showtags: true
        }
    },
    components:{
        Cinemafilm,
    },
    created() {
        // 发起通知，通知app.vue组件移出底部菜单
        this.eventBus.$emit('footernav',false)
        // this.height = document.documentElement.clientHeight
    },
    async mounted() {
        let detailData = await cinemaDetailData(this.$route.params.cinemaId)
        this.cinemaData = detailData.data.data.cinema
        // console.log(this.cinemaData);
    },
    beforeDestroy() {
        // 发起通知，通知app.vue组件恢复底部菜单
        this.eventBus.$emit('footernav',true)
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        showtagsdetail(){
            this.showtags = true;
        },
        closeShowtags(){
            this.showtags = false
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .goback{
        height: 44px;
        display: flex;
        align-items: center;
        background: #fff;
        span{
            width: 50px;
            padding: 0 15px;
            img{
                float: left;
                width: 11px;
                height: 18px;
            }
        }
        .closeTags{
            img{
                width: 19px;
            }
        }
    }
    .headerTitle{
        height: 44px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        h3{
            font-size: 17px;
            font-weight: 500;
        }
    }
    .tags{
        overflow: hidden;
        display: flex;
        padding: 0 10px;
        justify-content: space-evenly;
        color: #ffb232;
        height: 44px;
        align-items: center;
        .tagsli{
            height: 20px;
            float: left;
            border: 1px solid #ffb232;
            padding: 0 5px;
            line-height: 20px;
            font-size: 10px;
        }
    }
    .address{
        border-top: 1px solid #ededed;
        display: flex;
        padding: 0 15px;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        color: #2c3e50;
        span{
            display: flex;
            align-items: center;
            img{
                margin-right: 6px;
                width: 14px;
            }
            p{  
                font-size: 14px;
                line-height: 44px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .spanleft{
            img{
                width: 17px;
            }
        }
    }
    .tagsdetail{
        position: absolute;
        padding: 30px;
        background: #fff;
        animation: move .4s ease alternate;
        z-index: -1;
        li{
            font-size: 12px;
            position: relative;
            margin-bottom: 20px;
            .tagname{
                float: left;
                color: #ffb232;
                border: 1px solid #ffb232;
                padding: 5px;
                position: absolute;
                top: 0;
            }
            .tagdetail{
                padding-left: 70px;
                width: 245px;
            }
        }
    }
    @keyframes move {
        from{
            top: -500px;
        }
        to{
            top: 80px;
        }
    }
</style>