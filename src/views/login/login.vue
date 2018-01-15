<template>
    <div class="big login">
        <div class="loginhead">
            <a href="#"><i class="iconfont icon-xiangzuo"></i></a>
            <a href="#">登录717</a>
            <a href="#"><span @click='toRegister'>注册</span></a>
        </div>
        <div class="section">
            <ul>
                <li><i class="iconfont icon-wode"></i><input type="text" placeholder="请输入您的手机号" v-model='username'></li>
                <li><i class="iconfont icon-shouye"></i><input type="password" placeholder="请输入您的密码" v-model='password'></li>
            </ul>
            <p><button @click="loginBtn">立即登录</button></p>
            <p>忘记密码？</p>
        </div>
    </div>
</template>

<script>
import { setCookies } from '../../utils/utils';
export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        toRegister () {
            this.$router.push({name: 'register'})
        },
        loginBtn () {
            let query = this.$route.query.from;
            this.$http.post('/mall/login', {
                username: this.username,
                password: this.password
            }).then((res) => {
                if (res.data.code === 1) {
                    setCookies('token', res.data.token);
                    this.$router.push({name: query})
                }
            })
        }
    }
};
</script>

<style lang='scss'>
.loginhead{
    height:1.28rem;
    padding-top:.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    background:#fafafb;
    padding-top:.3rem;
    a{
        color:#333;
        &:nth-child(2){
            font-size:.3rem;
        }
        &:nth-child(3){
            color:#fc4d4d;
            font-size:.2rem;
        }
    }
}
.section{
    ul{
        margin-top:.3rem;
        li{
            width:100%;
            height: 1.2rem;
            position: relative;
            input{
                border:none;
                width:100%;
                height: 100%;
                padding-left:.9rem;
                line-height: 1.2rem;
                border-bottom:1px solid #ccc;
            }
            i{
                position: absolute;
                left: 4%;
                top:30%;
                font-size:.5rem;
            }
        }
    }
    p{
        width:100%;
        &:nth-child(2){
            text-align: center;
            button{
                height: 1.2rem;
                width: 60%;
                border-radius:.6rem;
                color:#fff;
                border:none;
                line-height: 1.2rem;
                margin-top:1.2rem;
                background:#fc4141;
                font-size:.4rem;
            }
        }
        &:nth-child(3){
            height: .8rem;
            line-height: .8rem;
            text-align: right;
            padding-right: .6rem;
            color:#999;
            text-decoration: underline;
            font-size:.25rem;
        }
    }
}
</style>
