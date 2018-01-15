<template>
    <div class="big">
        <router-view></router-view>
        <div class="footer">
            <router-link to='home'><img src="../../assets/images/fang1.png" alt=""><span>首页</span></router-link>
            <router-link to='type'><img src="../../assets/images/hua1.png" alt=""><span>分类</span></router-link>
            <router-link to='shopCar'><img src="../../assets/images/mai1.png" alt=""><span>购物车</span></router-link>
            <router-link to='mine'><img src="../../assets/images/ren2.png" alt=""><span>我的</span></router-link>
        </div>
        <span class='tig'>{{ $store.state.cart_list.length }}</span>
    </div>
</template>

<script>
export default {
    name: 'index'
};
</script>

<style src='./index.css'>

</style>
