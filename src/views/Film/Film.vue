<template>
    <div>
        <!-- <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav> -->
        <FilmListTopNav class="fixed"></FilmListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from "@/components/FilmListTopNav"
export default {
    components:{
        FilmListTopNav,
    },
    data() {
        return {
            fixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll',(e)=>{
            let top = document.documentElement.scrollTop
            // console.log(top);
            if(top > 100){
                this.fixed = true
            }else{
                this.fixed = false
            }
        },true)
    },
}
</script>

<style lang="scss" scoped>
    .fixed {
        position: fixed;
        top: 0;
        z-index: 123;
        background: #fff;
      //  transition: .5s;
    }
</style>