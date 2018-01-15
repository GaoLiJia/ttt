<template>
    <div class="section">
        <div class="shopcarhead">
            <a href="#"></a>
            <a href="#">购物车</a>
            <a href="#">编辑</a>
        </div>
        <div class="main">
            <div class="carlist">
                <p v-if='$store.state.cart_list.length == 0'>无商品</p>
                <shopcar-list v-else v-for='(v, k) in $store.state.cart_list' :key='k' :v='v' :inx='k'></shopcar-list>
            </div>
            <div class="commondShop">
                推荐商品
            </div>
            <div class='dllist'>
                <mainshop-list v-for='(v, k) in shopList' :key='k' :data='v'></mainshop-list>
            </div>
        </div>
        <div class="acc">
            <span class="bgsa" :class="{ 'bgss': all()}" @click='alltoggle'></span>
            <p>全选</p>
            <p>
                <b>合计:</b><span>￥</span><span class="pla">{{$store.state.total}}</span>
            </p>
            <p class="balan">结算</p>
        </div>
    </div>
</template>

<script>
import shopcarList from '../../components/shopcarList';
import mainshopList from '../../components/mainshopList'
export default {
    name: 'shop',
    data () {
        return {
            shopList: []
        }
    },
    components: {
        shopcarList,
        mainshopList
    },
    methods: {
        alltoggle () {
            this.$store.commit('changeRadio', {
                allchecked: !this.all()
            });
            this.$store.commit('changePrice')
        },
        all () {
            return this.$store.state.allchecked;
        }
    },
    created() {
      this.$http
        .post("/mall/index/getGoodsChannel", {
          channel_id: 2
        })
        .then(res => {
          this.shopList = res.data.data.data;
        });
    }
};
</script>

<style lang='scss'>
.section{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex:1;
        overflow-y: scroll;
    }
}
.shopcarhead,.commondShop{
    height:.9rem;
    background:#fafafb;
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
}
.commondShop{
    justify-content: center;
}
.carlist{
    width: 100%;
    overflow: auto;
    flex: 1;
    .dl{
        width: 100%;
        height: 2.6rem;
        background: #fff;
        margin-bottom: .2rem;
        position: relative;
        .bgsa{
                display: inline-block;
                position: absolute;
                left: .2rem;
                top: 1.06rem;
                width: .48rem;
                height: .48rem;
                border-radius: 50%;
                border: 1px solid #ccc;
                text-align: center;
                line-height: 0.48rem;
                input{
                    vertical-align: middle;
                    font-size: 100%;
                    outline: none;
                    font-family: "Microsoft YaHei";
                    border-radius: 0;
                }
        }
        .bgss{
            background: #f00;
            border: none;
        }
        .bgsb{
            position: absolute;
            display: inline-block;
            width: 2rem;
            height: .6rem;
            top: 1.4rem;
            right: .3rem;
            font-weight: 300;
            line-height: auto;
            border: 1px solid #d8d8d8;
            border-radius: 2px;
            display: -webkit-flex;
            span{
                &:nth-child(1), &:nth-child(3){
                    width: 30%;
                    color: #333333;
                    font-size: .5rem;
                    border-right: 1px solid #d8d8d8;
                }
                &:nth-child(2){
                    font-size: .36rem;
                    width: 40%;
                    color: #333333;
                    line-height: .62rem;
                    border-right: 1px solid #d8d8d8;
                }
            }
        }
        dt{
            width: 2rem;
            margin-top: .32rem;
            float: left;
            height: 2rem;
            margin-left: 1rem;
            img{
                width: 100%;
                height: 100%;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
            }
        }
        dd{
            font-size: .26rem;
            margin-top: .32rem;
            float: left;
            margin-left: .2rem;
            .counts{
                font-size: .3rem;
                margin-left: 2px;
                color: #fc4141;
                font-weight: bold;
            }
            p{
                &:nth-child(1){
                    width: 4.2rem;
                    padding-top: 1rem;
                    padding-top: .3rem;
                    height: .6rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: auto;
                    font-size: .3rem;
                    color: #666666;
                }
                &:nth-child(2){
                    position: absolute;
                    bottom: .85rem;
                }
                &:nth-child(3){
                    position: absolute;
                    bottom: .46rem;
                }
            }
        }
    }
}
.acc {
    width: 100%;
    height: 0.93rem;
    background: #FFF;
    position: relative;
    display: -webkit-flex;
    border-top:1px solid #e5e5e5;
    .bgsa{
        display: inline-block;
        position: absolute;
        top: 9px;
        left: .2rem;
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 0.48rem;
    }
    .bgss{
            background: #f00!important;
            border: none;
        }
}
.acc p:nth-child(2) {
    width: 30%;
    color: #666666;
    text-align: center;
    font-size: 0.3rem;
    line-height: .93rem;
    margin-left: 0.16rem;
}
.acc p:nth-child(3) {
    -webkit-flex-grow: 1;
    text-align: right;
    line-height: .96rem;
    color: #666666;
    font-size: 0.3rem;
    position: relative;
}
.acc p:nth-child(4) {
    width: 30%;
    background: #fc4141;
    text-align: center;
    line-height: .9rem;
    color: #ffffff;
    font-size: 0.32rem;
    margin-left: 0.26rem;
}
</style>
