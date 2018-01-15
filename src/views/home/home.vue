<template>
    <div class="section">
        <my-head></my-head>
        <my-main></my-main>
    </div>
</template>

<script>
import myHead from './head.vue';
import myMain from './main.vue';
export default {
    name: 'home',
    components: {
        myHead,
        myMain
    }
};
</script>

<style lang='scss'>
.section{
    flex:1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}
</style>
