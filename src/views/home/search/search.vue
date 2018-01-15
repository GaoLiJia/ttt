<template>
    <div class="section search">
        <header class="header">
            <span class="back" @click="goBack">
                <i class="iconfont icon-xiangzuo"></i>
            </span>
            <h1>
                <input type="text" placeholder="请输入您要购买的商品" class="form-control" v-model='historySearch'>
                <i class="iconfont icon-fangdajing"></i>
            </h1>
            <span class="more" @click='findBtn'>搜索</span>
            <!-- <mt-search  cancel-text="取消" placeholder="搜索">
            </mt-search> -->
        </header>
        <section class="scroll">
            <h1 class="title">最近搜索 <i class="iconfont icon-lajixiang "></i></h1>
            <div class="cont">
                <p v-if='this.historyList.length === 0'>无搜索历史</p>
                <p v-else>
                    <span v-for='(v, k) in historyList' :key='k'>{{v}}</span>
                </p>
            </div>
            <h1 class="title">大家都在搜</h1>
            <div class="eg">
                <span v-for="(v,i) in list" :key="i">{{v}}</span>
            </div>
        <section>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'search1',
    data () {
        return {
            list: ['蜂蜜','三黄鸡','红酒','蜂蜜','三黄鸡','红酒','红枣'],
            historySearch: '',
            historyList: []
        }
    },
    methods:{
        goBack () {
            this.$router.push({name: 'home'});
        },
        findBtn () {
            if (this.historySearch === '') return;
            let nowHistory = localStorage.getItem('historySearch', this.historySearch);
            if (!nowHistory) {
                localStorage.setItem('historySearch', JSON.stringify([this.historySearch]));
            } else {
                let historyArr = JSON.parse(nowHistory)
                historyArr.unshift(this.historySearch);
                historyArr = _.uniq(historyArr);
                localStorage.setItem('historySearch', JSON.stringify(historyArr));
            }
            this.showHistory();
            this.historySearch = '';
        },
        showHistory () {
            this.historyList = JSON.parse(localStorage.getItem('historySearch'));
        }
    },
    created () {
        this.showHistory()
    }
};
</script>

<style scoped>
.search{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}

.header{
    height: .9rem;
    position: relative;
    background: #fff;
    width: 100%;
    z-index: 9999;
}
.header>h1{
    text-align: center;
    margin-left: 1rem;
    margin-right: 1.2rem;
    position: relative;
    margin-top: .15rem;
}
.header>h1 i{
    position: absolute;
    left: .2rem;
    top: .15rem;
    font-size: 0.36rem;
}
.header>h1 input{
    padding-left: .55rem;
    border-radius: .05rem;
    border: 0;
    height: .6rem;
    width: 100%;
    font-size: 0.22rem;
    background: #eee;
}
.back{
    position: absolute;
    left: .3rem;
    top: .15rem;
    font-size: 0.4rem;
}
.more{
    position: absolute;
    right: .3rem;
    top: .15rem;
    font-size: 0.32rem;
}
.scroll{
    background: #fff;
    flex: 1;
}
.title{
    padding-left: .3rem;
    padding-right: .3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.4rem;
    font-size: 0.32rem;
}
.icon-lajixiang{
    float: right;
}
.cont, .eg{
    padding-left: .3rem;
    padding-right: .3rem;
    font-size: 0.34rem;
}
.cont{
   padding-top: .1rem;
   padding-bottom: .1rem; 
}
.eg{
    display: flex;
    flex-wrap: wrap;
}
.eg span,.cont span{
    display: inline-block;
    border-radius: .1rem;
    border: solid 1px #ccc;
    padding: .1rem .2rem;
    margin-right: .3rem;
    margin-bottom: .3rem;
}
</style>