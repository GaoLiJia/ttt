<template>
    <div class="mm">
        <div class="info">
            <p>{{v.uname}} {{v.uphone}}</p>
            <p>{{v.totalAddr.province}}{{v.totalAddr.city}}{{v.totalAddr.area}}{{v.myAddress}}</p>
            <p><a href="#"><span class="bgsa" :class="{'' : isA, 'bgss': !isA}" @click="isA = !isA">√</span><b>默认地址</b></a><a href="#"><i class="icon iconfont icon-shouye"></i><span @click='reWrite'>编辑</span><i class="icon iconfont icon-shouye"></i><span @click='delAddr(v.uid)'>删除</span></a></p>
        </div>
        <div class="Posmask" v-if='flag'>
            <div class="form">
                <input type="text" placeholder="收货人姓名" class="name" v-model='uname'>
                <input type="text" placeholder="手机号" class="tele" v-model='uphone'>
                <city-list :data='cityDatas' @sendCity='sendData'></city-list>
                <input type="text" placeholder="详细地址" class="addr" v-model="myAddress">
                <p class="moren"><span class="bgsa" :class="{'' : isA, 'bgss': !isA}" @click="isA = !isA">√</span><span>设为默认地址</span></p>
                <p class="save" @click='savenewAddr(v.uid)'>保存</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getCookies, delCookies } from '../utils/utils.js';
import { MessageBox } from 'mint-ui';
import cityList from './cityList';
export default {
    name: 'addresslist',
    props: ['v'],
    data () {
        return {
            uname: this.v.uname,
            uphone: this.v.uphone,
            myAddress: this.v.myAddress,
            totalAddr: this.v.totalAddr,
            flag:false,
            newAddrList: []
        }
    },
    components: {
        MessageBox,
        cityList
    },
    methods: {
        sendData (val) {
            this.totalAddr = val;
        },
        delAddr (k) {
            // MessageBox.confirm('Are you sure?').then(action => {
            //     this.$http.post('/mall/index/del', {id: k, token: getCookies('token')}).then(res => {
            //         if (res.data.code === 1001) {
            //             MessageBox.alert(超时, '错误提示')
            //         }
            //     })
            // })
            if (confirm('确定删除？')) {
                this.$http.post('/mall/index/del', {id: k, token: getCookies('token')}).then(res => {
                    if (res.data.code === 1001) {
                        alert('超时');
                        this.$router.push({name: 'login'})
                        delCookies('token')
                    }
                })
            }
        },
        reWrite () {
            this.flag = true;
        },
        savenewAddr (k) {
            this.$http.post('/mall/index/rewrite', {
                id: k,
                uname: this.uname,
                uphone: this.uphone,
                myAddress: this.myAddress,
                totalAddr: this.totalAddr,
            }).then((res) => {
                this.newAddrList = res.data.list;
                this.flag = false;
                this.$emit('sendNew', this.newAddrList)
            })
        }
    }
};
</script>

<style lang='scss'>
.info{
    height: 3rem;
    background:#fff;
    margin-bottom:.3rem;
    padding: 0 .3rem;
    p{
        line-height: 1rem;
        color:#999;
        &:nth-child(3){
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
        b{
            padding-left:.6rem;
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
.Posmask{
    width:100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    position: absolute;
    left: 0;
    top:0;
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
        width:90%;
        background:#fff;
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
</style>
