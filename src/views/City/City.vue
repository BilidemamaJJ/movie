<template>
    <div>
        <div class="goBack" @click="goBack()">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                alt=""
            />
        </div>
        <van-index-bar :index-list="indexList" highlight-color="#ff0000">
            <template v-for="item in dataList">
                <van-index-anchor :index="item.index" :key="item.index" style="background:#eee"></van-index-anchor>
                <van-cell @click="chooseCity(sub.name)" v-for="(sub,key) in item.data" :title="sub.name" :key="key" />
            </template>
        </van-index-bar>
    </div>
</template>

<script>
import {cityListData} from "@/api/api"
import Vue from "vue";
import "vant/lib/index.css"
import { IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data() {
        return {
            dataList: [],
            indexList: [],
        }
    },
    created() {
        this.eventBus.$emit('footernav',false)
    },

    async mounted() {
        let ret = await cityListData();
        this.dataList = ret[0];
        this.indexList = ret[1];
    },

    beforeDestroy() {
        this.eventBus.$emit('footernav',true)
    },
    methods: {
        // 获取选择的城市名称
        chooseCity: function(city){
            this.$store.commit('setCity',city)
            this.$router.go(-1)
        },
        
        // goBack:function(){
        //     this.$router.go(-1)
        // }
    
    },
}
</script>

<style lang="scss" scoped>
    .goBack{
        position: fixed;
        background-color: hsla(0, 0%, 100%, 0);
        color: transparent;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        width: 100vw;
        height: 44px;
        z-index: 1;
        img{
            width: 30px;
            margin-top: 5px;
            margin-left: 5px;
        }
    }
</style>