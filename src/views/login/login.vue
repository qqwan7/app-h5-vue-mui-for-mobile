/**
* Created by qqwan on 2019/03/11.
*/
<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">登录</h1>
        </header>
        <div class="mui-content">
            <form id='login-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label>账号</label>
                    <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model.trim="account">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model.trim="password">
                </div>
            </form>
            <div class="mui-content-padded">
                <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @tap="submitForm">登录</button>
                <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
                </div>
            </div>
            <div class="mui-content-padded oauth-area">

            </div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    export default {
        name: 'login',
        data () {
            return {
                account: '',
                password: ''
            }
        },
        methods: {
            submitForm () {
                if (this.account !== '' && this.password !== '') {
                    localStorage.setItem('token_account', this.account)
                    this.$router.push('/meeting/list')
                } else {
                    mui.toast('账号或密码错误！')
                }
            }
        },
        mounted () {

        }
    }
</script>

<style scoped>
    .mui-input-group {
        margin-top: 10px;
    }
    .mui-input-group:first-child {
        margin-top: 20px;
    }
    .mui-content-padded {
        margin-top: 25px;
    }
    .mui-content-padded {
        margin: 10px;
    }
    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }
    .mui-btn-block {
        font-size: 18px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
        padding: 15px 0;
    }
    .mui-btn {
        padding: 10px;
    }
</style>
