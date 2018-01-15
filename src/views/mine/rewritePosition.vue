<template>
    <div class="position">
        <div class="header">
            <router-link to="/index/position"><</router-link>
            <router-link to="/login">收货人</router-link>
            <router-link to="/index/home"><i class="icon iconfont icon-shouye"></i></router-link>
        </div>
        <div class="section">
            <div class="form">
                <input type="text" placeholder="收货人姓名" class="name" v-model='uname'>
                <input type="text" placeholder="手机号" class="tele" v-model='uphone'>
                <city-list :data='cityDatas' @sendCity='sendData'></city-list>
                <input type="text" placeholder="详细地址" class="addr" v-model="myAddress">
                <p class="moren"><span class="bgsa" :class="{'' : isA, 'bgss': !isA}" @click="isA = !isA">√</span><span>设为默认地址</span></p>
                <p class="save" @click='saveAddr'>保存</p>
            </div>
        </div>
    </div>
</template>

<script>
import cityList from '../../components/cityList';
// import { MessageBox } from 'mint-ui';
export default {
    name: 'myForm',
    data () {
        return {
            isA: false,
            uname: '',
            upwd: '',
            myAddress: '',
            cityDatas: [],
            totalAddr: '',
            id: 0
        }
    },
    components: {
        cityList
    },
    methods: {
        sendData (val) {
            this.totalAddr = val;
        },
        saveAddr () {
            this.$http.post('/mall/index/msgAddr', {
                uid: ++this.id,
                uname: this.uname,
                uphone: this.uphone,
                totalAddr: this.totalAddr,
                myAddress: this.myAddress
            }).then((res) => {
                
            })
        }
    },
    created () {
        this.$http.post('/mall/index/position').then(res => {
            this.cityDatas = res.data;
        })
    }
}
</script>

<style scoped lang="scss">
    .position{
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
            .save{
                width: 4.60rem;
                height: 1rem;
                margin-top: .5rem;
                margin-left: 1.4rem;
                background: #fc4141;
                text-align: center;
                line-height: 1rem;
                color: #fff;
                border-radius: .5rem;
                font-size: .36rem;
            }
            .form{
                padding:0 .15rem;
                box-sizing: border-box;
                margin-top:.12rem;
                .name,.tele,.addr,.area{
                    width: 100%;
                    height: 1rem;
                    margin-bottom: 0.1rem;
                    border:0;
                    padding-left:.14rem;
                    box-sizing: border-box;
                    outline: 0;
                }
                .province,.city{
                    width: 48%;
                    height: 1rem;
                    margin-bottom:.12rem;
                }
                .moren{
                    position: relative;
                    width: 100%;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    span{
                        &:nth-child(2){
                            margin-left:.7rem;
                        }
                    }
                    .bgsa {
                        display: inline-block;
                        position: absolute;
                        left: 0rem;
                        top: .36rem;
                        width: 0.48rem;
                        height: 0.48rem;
                        border-radius: 50%;
                        border: 1px solid #ccc;
                        text-align: center;
                        line-height: 0.48rem;
                        color:#fff;
                        input {
                        vertical-align: middle;
                        font-size: 100%;
                        outline: none;
                        font-family: "Microsoft YaHei";
                        border-radius: 0;
                        }
                    }
                    .bgss {
                        background: #f00;
                        border: none;
                    }
                } 
            }
        }
        
    }
</style>
