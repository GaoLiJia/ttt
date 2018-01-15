import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        cart_list: [],
        total: 0,
        count: 1,
        allchecked: false
    },
    mutations: {
        update_cart (state, data) {
            let flag = true;
            state.cart_list = state.cart_list.map((item) => {
                if (item.id === data.id) {
                    flag = false;
                    ++item.count
                }
                return item
            })
            if (flag) {
                state.cart_list.push(data);
            }
        },
        changeNum (state, data) {
            state.cart_list[data.inx].count = data.count;
        },
        changePrice (state) {
            let sum = 0;
            state.cart_list.forEach((v, i) => {
                if (v.checked) {
                    sum += v.count * v.discount_price;
                }
            })
            state.total = sum;
        },
        changeCheckBox (state, data) {
            state.cart_list[data.inx].checked = data.checked;
            let bool = state.cart_list.every((v, k) => {
                return v.checked === true;
            });
            state.allchecked = bool
        },
        changeRadio (state, data) {
            state.allchecked = data.allchecked
            state.cart_list.forEach((v) => {
                v.checked = data.allchecked
            })
        }
    },
    actions: {
        
    }
})
store.subscribe(() => {
    // console.log(store.state.cart_list);
})
export default store;