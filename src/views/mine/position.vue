<template>
    <div class="big">
        <div class="header">
            <router-link to="/index/mine"><</router-link>
            <router-link to="/login">收货地址</router-link>
            <router-link to="/index/home"><i class="icon iconfont icon-shouye"></i></router-link>
        </div>
        <div class="section">
            <div class="addaddr">
                <position-list v-for='(v, k) in this.addrList' :key='k' :v='v' @sendNew='newnew'></position-list>
            </div>
            <p class="addes" @click="address"><em>+</em>新增加地址</p>
        </div>
    </div>
</template>

<script>
import addressList from '../../../server/serverData/addressList.json';
import positionList from '../../components/positionList.vue';
export default {
    name: 'myPosition',
    data () {
        return {
            isA: false,
            addrList: addressList.list
        }
    },
    components: {
        positionList
    },
    methods: {
        address () {
            this.$router.push({name: 'rewritePosition'})
        },
        newnew (val) {
            this.addrList = val;
        }
    }
}
</script>

<style scoped lang="scss">
    .big{
        width: 100%;
        height: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .15rem;
            box-sizing: border-box;
            a{
                font-size:.38rem;
            }
        }
        .section{
            background: #eee;
            flex:1;
            position: relative;
             .addes{
                 font-family: PingFangSC-Regular, sans-serif;
                background: #fc4141;
                width: 4.66rem;
                height: 0.98rem;
                text-align: center;
                line-height: 1.01rem;
                border-radius: 0.48rem;
                margin-top: .8rem;
                margin-left: 1.42rem;
                color: #fff;
                font-size: 0.32rem;
                em{
                    font-style: normal;
                    margin-right: 0.2rem;
                }
             }
             .addaddr{
                 height: auto;
             }
        }
    }
</style>
