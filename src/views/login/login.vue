/**
* Created by qqwan on 2019/03/11.
*/
<template>
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable main-container">
        <!-- 菜单容器 -->
        <aside class="mui-off-canvas-left">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <!-- 菜单具体展示内容 -->
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">MENU1</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">MENU2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <!-- 主页面容器 -->
        <div class="mui-inner-wrap">
            <!-- 主页面标题 -->
            <header class="mui-bar mui-bar-nav" ref="header">
                <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
                <h1 class="mui-title">标题</h1>
            </header>
            <div class="mui-content mui-scroll-wrapper" id="refreshContainer">
                <div class="mui-scroll">
                    <!-- 主界面具体展示内容 -->
                    <ul class="mui-table-view mui-table-view-radio">
                        <li class="mui-table-view-cell" v-for="n in list" :key="n">
                            <a class="mui-navigate-right">Item {{n}}</a>
                        </li>
                    </ul>
                    <button type="button" class="mui-btn">默认</button>
                    <div class="self-div">here here</div>
                    <span class="mui-icon mui-icon-weixin"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    // require('../../../static/mui.picker.all.js')
    export default {
        name: 'login',
        data () {
            return {
                list: 50
            }
        },
        methods: {
            flushCallBac () {
                this.list = this.list + 1
                setTimeout(() => {
                    mui('#refreshContainer').pullRefresh().endPulldownToRefresh()
                }, 3000)
            },
            toTop () {
                console.log('---------')
                mui('#refreshContainer').pullRefresh().scrollTo(0, 0, 100)
            }
        },
        mounted () {
            mui.init({
                pullRefresh: {
                    container: '#refreshContainer', // 下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
                    down: {
                        height: 50, // 可选,默认50.触发下拉刷新拖动距离,
                        auto: true, // 可选,默认false.首次加载自动下拉刷新一次
                        contentdown: '下拉可以刷新', // 可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                        contentover: '释放立即刷新', // 可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                        contentrefresh: '正在刷新...', // 可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                        callback: this.flushCallBac
                    },
                    up: {
                        auto: true // 可选,默认false.首次加载自动上拉加载一次
                    }
                },
                gestureConfig: {
                    tap: true, // 默认为true
                    doubletap: true, // 默认为false
                    longtap: true, // 默认为false
                    swipe: true, // 默认为true
                    drag: true, // 默认为true
                    hold: false, // 默认为false，不监听
                    release: false // 默认为false，不监听
                }
            })
            // document.querySelector('header').addEventListener('doubletap', () => {
            //     // 内容区滚动到顶部
            //     this.toTop()
            // })
            mui('.mui-inner-wrap').on('doubletap', 'header', () => {
                this.toTop()
            })
            mui.plusReady(function () {
                /* eslint-disable*/
                console.log('当前页面URL：' + plus.webview.currentWebview().getURL())
            })
            // mui('.mui-inner-wrap').on('tap', 'header, .mui-icon-weixin, .self-div', () => {
            //     this.toTop()
            // })
            // /* eslint-disable*/
            // mui('.mui-scroll-wrapper').scroll({
            //     deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            // })
        }
    }
</script>

<style scoped>

</style>
