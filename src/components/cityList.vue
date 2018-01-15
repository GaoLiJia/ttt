<template>
    <div class="citys">
        <select name="" class="province" v-model='province' @change='changeProv(province)'>
            <option :value="v.name" v-for='(v, k) in data' :key='k'>{{v.name}}</option>
        </select>
        <select name="" class="city" v-model='city' @change='changeCity(city)'>
            <option :value="v.name" v-for='(v, k) in citydata' :key='k'>{{v.name}}</option>
        </select>
        <select name="" class="area" v-model='area' @change='changeArea(area)'>
            <option :value="v" v-for='(v, k) in areadata' :key='k'>{{v}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'citylist',
    props: ['data'],
    data () {
        return {
            province: '',
            city: '',
            area: '',
            citydata: [],
            areadata: []
        }
    },
    methods: {
        changeProv (val) {
            this.data.forEach((v) => {
                if (v.name === val) {
                    this.citydata = v.city
                }
            })
            this.city = ''
            this.area = ''
        },
        changeCity (val) {
            this.citydata.forEach((v) => {
                if (v.name === val) {
                    this.areadata = v.area
                }
            })
            this.area = ''
        },
        changeArea (val) {
            this.$emit('sendCity', {
                province: this.province,
                city: this.city,
                area: this.area
            })
        }
    }
};
</script>

<style>
.name,.tele,.addr,.area{
    width: 100%;
    height: 1rem;
    margin-bottom: 0.1rem;
    border:0;
    padding-left:.14rem;
    box-sizing: border-box;
    outline: 0;
}
.province,.city{
    width: 48%;
    height: 1rem;
    margin-bottom:.12rem;
}
</style>
