<template>
  <div class="main" @scroll='onScrollUpdata' ref='main'>
    <div class="mainwrap" ref='mainwrap'>
      <div class="banner">
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for="(v, k) in banners" :key="k"><img :src="v.src" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class='icons'>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>家乡味道</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>进口食品</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>牛奶乳品</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>茶果冲饮</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>休闲零食</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>米面粮油</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>调味调料</span></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>酒水饮料</span></a>
      </div>
      <div class="shopactive">
        <h3>商城动态</h3>
        <div class="swiper-container wordscroll">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              绿色无公害、无污染、无添加，天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜
            </div>
            <div class="swiper-slide">
              绿色无公害、无污染、无添加，天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜
            </div>
            <div class="swiper-slide">
              绿色无公害、无污染、无添加，天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜
            </div>
          </div>
        </div>
      </div>
      <div class="every">
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>天天特惠</span>每天都有惊喜</a>
        <a href="#">更多<i class="icon iconfont icon-angle-right"></i></a>
      </div>
      <div class="spacial">
        <div class="sleft">
          <img src="../../assets/images/home1.png">
        </div>
        <div class="sright">
          <img src="../../assets/images/ruwei.png">
          <img src="../../assets/images/gaodian.png">
        </div>
      </div>
      <div class="homeeat">
        <a href="#"></a>
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>家乡味道</span></a>
        <a href="#">更多<i class="icon iconfont icon-angle-right"></i></a>
      </div>
      <div class='dllist'>
        <mainshop-list v-for='(v, k) in shopList' :key='k' :data='v'></mainshop-list>
      </div>
      <p>{{tip}}</p>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import mainshopList from "../../components/mainshopList.vue";
import Swiper from "../../assets/js/swiper.min.js";
setTimeout(() => {
  new Swiper(".wordscroll", {
    loop: true,
    direction: "vertical",
    autoplay: 2000
  });
}, 0);
export default {
  name: "mains",
  data() {
    return {
      banners: [
        {
          src: "./src/assets/images/1.png"
        },
        {
          src: "./src/assets/images/2.png"
        },
        {
          src: "./src/assets/images/3.png"
        },
        {
          src: "./src/assets/images/4.png"
        },
        {
          src: "./src/assets/images/5.png"
        }
      ],
      channel_id: 2,
      tip: "正在加载数据",
      isScroll: true,
      shopList: []
    };
  },
  components: {
    Swipe,
    SwipeItem,
    mainshopList
  },
  methods: {
    onScrollUpdata() {
      let main = this.$refs.mainwrap,
        winH = this.$refs.main.offsetHeight,
        mainH = main.offsetHeight,
        scrollTop = this.$refs.main.scrollTop;
      if (this.isScroll) {
        if (mainH - winH - scrollTop < 30) {
          this.isScroll = false;
          this.channel_id++;
          this.queryGoodsList();
        }
      }
    },
    queryGoodsList() {
      this.$http
        .post("/mall/index/getGoodsChannel", {
          channel_id: this.channel_id
        })
        .then(res => {
          this.shopList = this.shopList.concat(res.data.data.data);
          if (res.data.data.data.length === 0) {
            this.tip = '已加载完毕'
          }
          this.isScroll = true;
        });
    }
  },
  created() {
    this.queryGoodsList();
  }
};
</script>

<style lang='scss'>
.main {
  flex: 1;
  overflow-y: scroll;
}
.banner {
  width: 100%;
  height: 3.54rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.icons {
  height: 3rem;
  background: #fff;
  margin-top: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  a {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    i.icon {
      margin-top: 0.15rem;
      display: inline-block;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background: lightpink;
      color: #fff;
      font-size: 0.3rem;
      text-align: center;
      line-height: 0.9rem;
    }
    span {
      margin-top: 0.1rem;
    }
  }
}
.shopactive {
  height: 1.2rem;
  background: #fff;
  padding: 0 0.3rem;
  display: flex;
  h3 {
    width: 15%;
    font-size: 0.4rem;
    color: #ff6d00;
    font-weight: normal;
  }
  .wordscroll {
    width: 85%;
    height: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
  }
}
.every {
  height: 0.8rem;
  background: #fff;
  margin: 0.1rem 0;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    &:nth-child(1) {
      color: #ff6d00;
      span {
        font-size: 0.3rem;
      }
    }
    &:nth-child(2) {
      color: #333;
    }
  }
}
.spacial {
  height: 4.16rem;
  display: flex;
  flex-wrap: wrap;
  .sleft {
    width: 49%;
    img {
      width: 100%;
    }
  }
  .sright {
    width: 49%;
    margin-left: 2%;
    img {
      width: 100%;
      &:nth-child(1) {
        height: 49%;
      }
      &:nth-child(2) {
        height: 49%;
      }
    }
  }
}
.homeeat {
  height: 0.8rem;
  background: #fff;
  margin: 0.1rem 0;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    &:nth-child(2) {
      color: #ff6d00;
      span {
        font-size: 0.3rem;
      }
    }
    &:nth-child(3) {
      color: #333;
    }
  }
}
</style>
