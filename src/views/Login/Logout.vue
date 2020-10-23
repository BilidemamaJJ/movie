<template>
    <div class="bg">
        <div>
        <div class="top">
            <img @click="goBack()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg==" alt="">
            <span>我的资料</span>
        </div>
        <div class="userHead">
            <span>头像</span>
            <span >
                <div><img :src="userInfo.headIcon" alt=""></div>
            </span>
        </div>
        <div class="unsubscribe">
            <span>昵称</span>
            <span>
                <i>{{userInfo.mobile}}    </i>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
            </span>
        </div>
        
        <div class="unsubscribe">
            <span>性别</span>
            <span>
                <i>未设置    </i>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
            </span>
        </div>
        <div class="unsubscribe">
            <span>生日</span>
            <span>
                <i>未设置    </i>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
            </span>
        </div>
        <div class="logout" @click="logout()">
            退出登录
        </div>
        </div>
    </div>
</template>
<script>
import {centerUserInfoData} from "@/api/api"
export default {
    data() {
        return {
            height: 0,
            userInfo: {},
        }
    },
    created() {
        this.eventBus.$emit('footernav',false)
    },
    async mounted() {
        let _token = this.$store.state._token
        if(_token){
            let ret = await centerUserInfoData(_token)
            // console.log(ret);
            this.userInfo = ret.data.user_info
        }else{
            this.userInfo= {}
        }
    },
    beforeDestroy() {
        this.eventBus.$emit('footernav',true)
    },
    methods: {
        goBack(){
            this.$router.push('/center')
        },
        logout: function(){
            this.$store.commit("logoutDelToken")
            this.$router.push('/center')
        }
    },
}
</script>

<style lang="scss" scoped>
.bg{
    overflow: hidden;
    background: #f5f5f5;
    font-size: 15px;
    .top{
        height: 44px;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 0 15px;
        img{
            width: 11px;
            height: 18px;
        }
        span{
            position: absolute;
            left: 50%;
            font-size: 18px;
            transform: translateX(-50%);
        }
    }
    .userHead{
        background:#fff;
        margin-top: 10px;
        height: 49px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        span{
            display: flex;
            div{
            width:50px;
            height:50px;
            overflow: hidden;
            border-radius: 50px;
                img{
                    height: 100%;
                    position: relative;
                    right: 0;
                }
            }
        }
    }
    
    .unsubscribe{
        background: #fff;
        margin-top: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        border-bottom: 1px solid #ededed;
        i{
            font-style: normal;
            font-size: 14px;
            color: #797d82;
        }
        img{
            height: 12px;
        }
    }
    .logout{
        position: fixed;
        bottom: 0;
        height: 50px;
        background: orangered;
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        color: #f5f5f5;
    }
}
</style>