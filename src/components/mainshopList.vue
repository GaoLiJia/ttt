<template>
  <dl @click="toGoodMsg()"> 
    <dt><img :src="'http://www.lb717.com/'+data.obj_data"></dt>
    <dd>
      <p>{{ data.goods_name }}</p>
      <p><a href="#">￥{{ data.discount_price }}</a><a href="#"><img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="" @click.stop='carBtn'></a></p>
    </dd>
  </dl>
</template>

<script>
export default {
    name: 'mainshoplist',
    data () {
        return {
            
        };
    },
    props: ['data'],
    methods: {
        toGoodMsg () {
            this.$router.push({name: 'goodMsg', params: [this.data.goods_name, this.data.obj_data, this.data.discount_price]});
        },
        carBtn () {
            this.$http_token.post('/mall/index/shopcar', {
                channel_id: 2
            }).then((res) => {
                this.$message('添加成功');
                this.$store.commit('update_cart', {
                    id: this.data.goods_id,
                    goods_name: this.data.goods_name,
                    obj_data: this.data.obj_data,
                    discount_price: this.data.discount_price,
                    count: 1,
                    checked: false
                })
            })
        }
    }
};
</script>

<style lang='scss'>
.dllist{
    height: auto;
    display: flex;
    flex-wrap: wrap;
    dl{
        width:49%;
        background:#fff;
        height: 5.2rem;
        margin-bottom:2%;
        &:nth-child(2n){
            margin-left:2%;
        }
        dt{
            img{
                width:100%;
            }
        }
        dd{
            p{
                &:nth-child(1){
                    height: .68rem;
                    margin: 0 .1rem;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                }
                &:nth-child(2){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    line-height: .3rem;
                    img{
                        width:.64rem;
                        height: .56rem;
                    }
                    a{
                        color:#fc4141;
                        font-size:.3rem;
                    }
                }
            }
        }
    }
}
</style>
