<template>
    <div class="section">
        <div class="typehead">
            <i class="iconfont icon-fangdajing"></i><input type="text" value="请输入你要购买的商品">
        </div>
        <div class="main">
            <div class="typeleft">
                <span v-for='(v, k) in typeItem' :key='k' @click='showLoad(k)' :class="{'bg': ind === k}">{{v}}</span>
            </div>
            <div class="typeright" ref='typeright'>
                <dl v-for='(v, k) in rightList' :key='k'>
                    <dt><img :src="'http://www.lb717.com' + v.cate_icon" alt=""></dt>
                    <dd>{{v.cate_name}}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'type',
    data () {
        return {
            typeItem: ['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味调料','酒水饮料'],
            rightList: [

            ],
            num :1,
            flag: false,
            ind: 0
        }
    },
    methods: {
        showLoad (k) {
            this.ind = k;
            this.$loading.show(this.$refs.typeright)
            this.$http.post('/mall/index/type',{
                id: k+1
            }).then(res => {
                this.$loading.hide()
                this.rightList = res.data.data;
            })
            this.flag = true
        }
    },
    created () {
        
    }
};
</script>

<style lang='scss'>
.typehead{
    width:100%;
    height: .9rem;
    background:#fff;
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 0 .2rem;
    position: relative;
    input{
        width:80%;
        height: .7rem;
        background:#f5f5f5;
        border-radius:.1rem;
        color:#fff;
        border:none;
        margin-top:.1rem;
        padding-left:.6rem;
    }
    i{
        position: absolute;
        left: 15%;
        top:30%;
    }
}
.main{
    flex:1;
    overflow-y: scroll;
    display: flex;
    .typeleft{
        width:30%;
        span{
            display: inline-block;
            width:100%;
            height: .8rem;
            background:#f0eced;
            font-size:.2rem;
            color:#333;
            text-align: center;
            line-height: .8rem;
        }
        .bg{
            background:#fff;
        }
    }
    .typeright{
        width:70%;
        height:100%;
        display: flex;
        flex-wrap: wrap;
        dl{
            width: 30%;
            height: 2.5rem;
            background: #f7f7f7;
            margin-left:2%;
            margin-top:5%;
            dt{
                img{
                    width:100%;
                }
            }
            dd{
                text-align: center;
            }
        }
    }
}
</style>
