<template>
    <div>
        {{city}}
        {{data}}
        <br>
        <button @click="handle4()">吊我+13</button>
        <button @click="handle6()">获取总数</button>

    </div>
</template>

<script>
// 按需导入
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            data:1,
        }
    },
    // state直接获取对应的数据值
    mounted() {
        console.log(this.$store.state.city)
    },
    // 将全局函数映射为当前组件的计算属性
    computed: {
        ...mapState(['count','city']) // 扩展运算符...
    },
    methods: {
        ...mapMutations(['add']),  // 数组中只能写方法的名字，不能写参数 配合handle2(参数)使用
        ...mapActions(['addAsync']),  // 配合handle4(参数)使用
        ...mapGetters(['getCount']), // 映射方式
        handle1(){
            this.$store.commit('add',13) //commiit是组件中触发mutation的一种方式
        },
        handle2(){
            this.add(13) // 当前没有add this.add中的add是来自mapMutations中的add
        },
        handle3(){
            this.$store.dispatch('addAsync',31)
        },
        handle4(){
            this.addAsync(31)  // 调用mapActions中的addAsync方法
        },
        handle5(){
            console.log(this.$store.getters.getCount)
        },
        handle6(){
            console.log(this.getCount());
        }
    },
}
</script>