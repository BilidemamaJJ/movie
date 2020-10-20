<template>
    <div class="nav">
        <div class="topBox">
            <router-link to="/city" tag="div">
                {{city}} <span>&lt;</span>
            </router-link>
            <div class="title">
                电影
            </div>
        </div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" active-class="active">
                <span>正在热映</span>
            </router-link>
            <router-link to="/film/comingsoon" tag="li" active-class="active">
                <span>即将上映</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['count','city']) // 扩展运算符...
    },
}
</script>

<style lang="scss" scoped>
    .nav {
    width: 100%;
    height: 80px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    // position: fixed;
    .topBox{
        padding-left: 10px;
        height: 30px;
        font-size: 14px;
        span{
            font-size: 8px;
        }
        .title{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
        }
    }
    ul {
        display: flex;
        text-align: center;
        li {
            flex: 1;
            display: flex;
            justify-content: center;
            span{
                color: #333;
            }
            &.active {
                span {
                    width: 40%;
                    border-bottom: 2px solid red;
                    display: block;
                    color:#fe5100;
                }
            }
        }
    }
}
</style>