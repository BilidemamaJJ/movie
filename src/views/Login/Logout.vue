<template>
    <div>
        <button @click="logout">退出登录</button>
    </div>
</template>

<script>
import {centerUserInfoData} from "@/api/api"
export default {
    methods: {
        logout: function(){
             this.$store.commit("logoutDelToken")
         
            this.$router.go(-1)
        }
    },
}
</script>