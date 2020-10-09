<template>
  <div id="app">
      <FooterNav></FooterNav>
    <router-view/>
  </div>
</template>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    html,
    body{
        height: 100%;
        touch-action: none;
        ul,
        li{
            list-style: none;
        }
    }
</style>

<script>
import FooterNav from '@/components/FooterNav'
export default {
    components:{
        FooterNav,
    }
}
</script>
