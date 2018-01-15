<template>
    <div class="big goodmsg">
        <div class="msghead">
            <i class="iconfont icon-xiangzuo"></i>返回
            <a href="#"><span>商品</span><span>详情</span></a>
            <a href="#"><i class="iconfont icon-xiaoxi"></i></a>
        </div>
        <div class="section">
            <div class="msgImg">
                <mt-swipe :auto="2000">
                    <mt-swipe-item><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></mt-swipe-item>
                    <mt-swipe-item><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></mt-swipe-item>
                </mt-swipe>
                <p>{{this.$route.params[0]}}</p>
                <p><a href="#"><b>￥{{this.$route.params[2]}}</b><span>(运费：￥8.00)</span></a><a href="#"><input type="button" value="溯源查询"></a></p>
            </div>
            <div class="shop-name">
                <img :src="'http://www.lb717.com/' + this.$route.params[1]" alt="">
                <h1>
                    <p>{{this.$route.params[0]}}</p>
                    <p>店主：NJY1407004</p>
                </h1>
                <button class="goin-shop">进入店铺</button>
            </div>
            <div class="swip">
                <h4 class="list-title">热门推荐</h4>
                <div class="deBox swiper-container swiper-container-horizontal swiper-container-free-mode">
                    <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">

                        <li class="swiper-slide " onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=711&amp;from_uid='" style="margin-right: 10px;">
                            <dl><dt><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></dt>
                                <dd>
                                    <p>大瀛 300gQQ脆骨 大瀛特色脆骨 骨肉相连 脆中带酥 </p>
                                    <p><i>￥</i><span>39.00</span></p>
                                </dd>
                            </dl>
                        </li>
                        <li class="swiper-slide " onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=4532&amp;from_uid='" style="margin-right: 10px;">
                            <dl><dt><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></dt>
                                <dd>
                                    <p>御龙源 锦州特产 锦州百合小菜素椒双条 新包装 308gx10袋 东北小咸菜 308gx10袋</p>
                                    <p><i>￥</i><span>68.00</span></p>
                                </dd>
                            </dl>
                        </li>
                        <li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=3157&amp;from_uid='" style="margin-right: 10px;">
                            <dl><dt><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></dt>
                                <dd>
                                    <p>战豪 玉泉至尊贡芽绿茶150g/盒</p>
                                    <p><i>￥</i><span>322.00</span></p>
                                </dd>
                            </dl>
                        </li>
                        <li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=2674&amp;from_uid='" style="margin-right: 10px;">
                            <dl><dt><img :src="'http://www.lb717.com/' + this.$route.params[1]" alt=""></dt>
                                <dd>
                                    <p>嘉仁 仙味香辣酱（重辣）220g/瓶</p>
                                    <p><i>￥</i><span>12.80</span></p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer class="footer" ref="footer">
            <ul>
                <li><i class="iconfont icon-kefu"></i></li>
                <li>
                    <i class="iconfont icon-gouwuche"></i>
                    <em>{{$store.state.cart_list.length}}</em>
                </li>
                <li><button @click="addCart">加入购物车</button></li>
                <li><button>立即购买</button></li>
            </ul>
        </footer>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from '../../../assets/js/swiper.min.js';
setTimeout(() => {
    new Swiper('.deBox',{
        slidesPerView: 3,
        spaceBetween: 30
    }) 
}, 2000);
export default {
    name: 'goodmsg',
    components: {
        Swipe,
        SwipeItem
    },
    methods: {
        addCart () {

        }
    }
};
</script>

<style lang='scss'>
.section{
    flex:1;
    overflow-y:scroll;
}
.msghead{
    height:1.28rem;
    padding-top:.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    background:#fff;
    padding-top:.3rem;
    a{
        color:#333;
        span{
            margin: 0 .4rem;
            font-size:.3rem;
        }
    }
}
.msgImg{
    width:100%;
    height: 7.5rem;
    img{
        width:100%;
        height: 100%;
    }
    p{
        background: #fff;
        padding: 0 .3rem;
        &:nth-child(2){
            height: .84rem;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            font-size:.3rem;
            padding-top:.1rem;
        }
        &:nth-child(3){
            height: 1.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                width:2rem;
                height: .8rem;
                border:none;
                border-radius: .05rem;
                background:#4f99f2;
                color:#fff;
                text-align: center;
                line-height: .8rem;
            }
            a{
                &:nth-child(1){
                    display: flex;
                    flex-direction: column;
                    b{
                        font-size:.3rem;
                        color:#fc4141;
                    }
                    span{
                        color:#999;
                    }
                }
            }
        }
    }
}
.shop-name{
    height: 1.2rem;
    font-size: 0.2rem;
    position: relative;
    background: #fff;
    margin-top: 2rem;
}
.shop-name  img{
    position: absolute;
    left: .3rem;
    top: .3rem;
    width: .6rem;
    height: .6rem;
}
.shop-name button{
    position: absolute;
    right: .3rem;
    top: .3rem;
    width: 1.9rem;
    height: 0.7rem;
    border: solid 1px #333;
    border-radius: .2rem;
    color: #333;
    background: #fff;
}
.shop-name h1{
   padding-top: .2rem;
    font-size: 0.26rem;
    padding-left: 1rem;
}
.shop-name h1 p{
    line-height: 0.4rem;
}
.swip {
    width: 100%;
    margin-top: .1rem;
}

.swip h4 {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    background: #fff;
    margin-top: .15rem;
    margin-bottom: .15rem;
}
.deBox {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.deBox ul {
    width: 100%;
    margin-left: .3rem;
}
.deBox ul li {
    float: left;
    width: 2.07rem;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
.deBox ul li dl dt {
    width: 2.03rem;
    height: 2.04rem;
}
.deBox ul li dl dt img {
    width: 100%;
    height: 100%;
}
.deBox ul li dl dd p:nth-child(1) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .24rem;
    text-align: center;
}
.deBox ul li dl dd p:nth-child(2) {
    text-align: center;
}
.deBox ul li dl dd p i {
    font-size: .18rem;
    color: #fc4141;
}
.deBox ul li dl dd p span {
    font-size: .28rem;
    font-weight: bold;
    color: #fc4141;
}
.footer{
    height: 1.3rem;
}
.footer ul{
    width:100%;
    display: -webkit-flex;
}
.footer ul li{
    flex: 1;
    text-align: center;
    line-height: 1.2rem; 
    position: relative;   
}
.footer ul li i{
    font-size: 0.5rem;
    
}
.footer ul li button{
    width: 100%;
    height: 100%;
    border: 0;
    color: #fff;
    font-size: 0.3rem;
}
.footer ul li:nth-child(3){
    flex: 2;
}
.footer ul li:nth-child(3) button{
    background: #fe8282;
}
.footer ul li:nth-child(4){
    flex: 2;
}
.footer ul li:nth-child(4) button{
    background: #fc4141;
}
.footer ul li em {
    position: absolute;
    top: .2rem;
    right: .3rem;
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    background: red;
    border-radius: 50%;
    color: #fff;
    font-size: .2rem;
    font-style: normal;
}
</style>
