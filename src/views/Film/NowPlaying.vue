<template>
    <div>
        <FilmList :list="list" :type="type" :key="'film' + list.length"></FilmList>
    </div>
</template>

<script>
// 导入
import {playingNowListData} from "@/api/api"
import FilmList from "@/components/FilmList"
export default {
    data(){
        return{
            pageNum:1,
            list:[],
            type:1  // 当前传递的数据为正在热映列表
        }
    },
    async mounted() {
        let ret = await playingNowListData(this.pageNum)
        // console.log(ret.data);
        this.list = ret.data.data.films
    },
    components:{
        FilmList
    }
}
</script>