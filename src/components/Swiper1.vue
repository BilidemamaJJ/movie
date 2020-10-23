<template>
    <div class="swiper-container">
        <img src="/aaaaa.jpg" alt="" class="backgroundimg">
        <div class="swiper-wrapper" v-on:click="handleindex()">
            <!-- 插槽 -->
            <slot></slot>
            
        </div>
        <!-- <h2 style="text-align:center;">{{indexoo}}</h2> -->
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css";
// import {mapActions} from 'vuex'
// import {mapMutations} from 'vuex'
var vm ={}
export default vm ={
    data() {
        return {
            indexoo: 0,
        }
    },
    updated(){
        this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                // effect = 0,
                speed: 600,
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
                watchSlidesProgress: true,
                on: {
                    setTranslate: function () {
                        let slides = this.slides
                        // console.log(slides);
                        for ( let i = 0; i < slides.length; i++) {
                            let slide = this.slides.eq(i)
                            // console.log(slide);
                            let progress = slides[i].progress

                            //slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
                            slide.css({
                                'opacity': '',
                                'background': ''
                            });
                            slide.transform(''); //清除样式
                            // this.eventBus.$emit('changefilm',progress)
                            
                            slide.transform('scale(' + (1 - Math.abs(progress) / 6) + ')');

                            
                        }

                        for(  let i = 0; i < slides.length; i++ ){
                            if( slides[i].className == "swiper-slide swiper-slide-active"){
                                this.indexoo = i;
                                // console.log(this.indexoo);
                                // this.$store.commit('setCinemaFilmId',this.indexoo)

                                // this.setCinemaFilmId(this.indexoo)  
                            }
                        }
                      //  console.log(this.indexoo);
                    },
                    setTransition: function (transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }
                    },
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                
            })
        });

        
    },
    methods: {
        handleindex(){
            // this.setCinemaFilmId(this.indexoo)
          //  console.log(this.indexoo);

        }
    },
}
</script>

<style lang="scss" scoped>
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
	  margin: 20px 0;
      margin-left: auto;
      margin-right: auto; 
      position: relative;
      .backgroundimg{
          position: absolute;
          width: 100%;
          filter: blur(20px);
      }
	  
    }
    .swiper-slide {
    margin: 15px 0;
      text-align: center;
    //   background: #fff;
    box-shadow: 0 0 2px #383838;
      height: 150px;
      width: 120px;
      overflow: hidden;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition-property:all;
    }
    .poster{
        width: 100%;
    }
	#progressEffect{
	  position: absolute;
      z-index: 10;
      top: 20px;
      left: 20px;
	}
  </style>