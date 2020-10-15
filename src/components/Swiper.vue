<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/swiper-bundle.min.css";
export default {
    mounted() {
        this.$nextTick(() => {
            new Swiper(".swiper-container", {
                slidesPerView: 1,
                breakpoints:{
                    200:{
                        slidesPerView:2,
                        spaceBetween:20,
                    },
                    280:{
                        slidesPerView:3,
                        spaceBetween:30
                    },
                    375:{
                        slidesPerView:4,
                        spaceBetween:40,
                    },
                    500:{
                        slidesPerView:5,
                        spaceBetween:50,
                    },
                },
            });
        });
    },
}
</script>