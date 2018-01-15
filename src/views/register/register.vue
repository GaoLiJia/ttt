<template>
    <div class="big register">
        <div class="registerhead">
            <a href="#"><i class="iconfont icon-xiangzuo"></i></a>
            <a href="#">注册717</a>
            <a href="#" @click='tologin'>登录</a>
        </div>
        <div class="section">
            <ul>
                <li><i class="iconfont icon-wode"></i><input type="text" placeholder="请输入您的手机号" v-model='username'></li>
                <li><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="请输入验证码" v-model='yzmText'><input type="button" value="获取验证码"></li>
                <li><i class="iconfont icon-shouye"></i><input type="password" placeholder="请输入您的密码" v-model='password'></li>
            </ul>
            <p><button @click='registerBtn'>立即注册</button></p>
            <p>忘记密码？</p>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    name: 'register',
    data () {
        return {
            username: '',
            password: '',
            yzmText: ''
        }
    },
    components: {
        MessageBox
    },
    methods: {
        registerBtn () {
            this.$http.post('/mall/register', {
                username: this.username,
                password: this.password
            }).then((res) => {
                if (res.data.code === 2) {
                    MessageBox.alert(res.data.msg, '错误提示').then(action => {
                        this.username = '';
                        this.password = '';
                    })
                } else if (res.data.code === 1) {
                    this.$router.push({name: 'login'})
                }
            })
        },
        tologin () {
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style lang='scss'>
.registerhead{
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
            &:nth-child(2){
                display: flex;
                background:#fff;
                input{
                    width:50%;
                    &:nth-child(3){
                        width:40%;
                        height: .9rem;
                        border:none;
                        background:#fc4141;
                        border-radius: .05rem;
                        color:#fff;
                        text-align: center;
                        line-height: .9rem;
                        margin-top:.15rem;
                        margin-left:5%;
                    }
                }
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
