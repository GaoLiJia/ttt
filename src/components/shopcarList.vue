<template>
  <dl class="dl">
    <span class="bgsa" :class="{ 'bgss': v.checked}" @click="toggle"></span>
    <b class="bgsb"><span class="cancel" @click='delNum'>-</span><span class="num">{{ v.count }}</span><span class="add" @click='addNum'>+</span></b>
    <dt><img :src="'http://www.lb717.com/'+v.obj_data"></dt>
    <dd>
      <p>{{ v.goods_name }}</p>
      <p><b class="bgb"></b><span class="count">{{ v.count }}</span></p>
      <p><b class="bgb2"></b><span class="counts">{{ v.discount_price }}</span></p>
    </dd>
  </dl>
</template>

<script>
export default {
    name: 'shopcarlist',
    props: ['v', 'inx'],
    data () {
        return {
            
        }
    },
    methods: {
        toggle: function(){
            this.$store.commit('changeCheckBox', {
                checked: !this.v.checked,
                inx: this.inx
            })
            this.$store.commit('changePrice')
        },
        addNum () {
            this.$store.commit('changeNum', {
                inx: this.inx,
                count: ++this.v.count
            })
            this.$store.commit('changePrice')
        },
        delNum () {
            this.$store.commit('changeNum', {
                inx: this.inx,
                count: --this.v.count
            })
            this.$store.commit('changePrice')
        }
    }
};
</script>

<style>

</style>
