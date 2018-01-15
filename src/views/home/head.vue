<template>
    <div class="header">
        <a href="#"><i class="icon iconfont icon-fengjing"></i><span>服务站</span></a>
        <!-- <a href="#" @click='onfocus'><input type="text" value="请输入您要购买的商品"><i class="icon iconfont icon-fangdajing"></i></a> -->
        <router-link to='search'><input type="text" value="请输入您要购买的商品"></router-link>
        <a href="#"><i class="icon iconfont icon-gongzuojilu"></i><span>我的店铺</span></a>
    </div>
</template>

<script>
export default {
    name: 'heads',
    methods: {
        onfocus () {
            this.$router.push({name: 'search'})
        }
    }
};
</script>

<style lang='scss'>
.header{
    width:100%;
    height: .9rem;
    background:#fff;
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 0 .2rem;
    a{
        color:#333;
        &:nth-child(1),&:nth-child(3){
            width:20%;
            display: flex;
            flex-direction: column;
            color:#fc4141;
            text-align: center;
            i.icon{
                font-size:.4rem;
            }
        }
        &:nth-child(2){
            width:60%;
            position: relative;
        }
        &:nth-child(2) input{
            width:100%;
            height: .6rem;
            border:none;
            background:#f5f5f5;
            border-radius:.05rem;
            margin-top:.15rem;
            padding-left:.6rem;
            color:#999;
        }
        &:nth-child(2) i.icon{
            position: absolute;
            left: 5%;
            top:35%;
        }
    }
}
</style>
