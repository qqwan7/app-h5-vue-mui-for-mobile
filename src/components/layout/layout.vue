/**
* Created by qqwan on 2019/03/13.
*/
<template>
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable main-container">
        <!-- 菜单容器 -->
        <aside class="mui-off-canvas-left">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <!-- 菜单具体展示内容 -->
                    <ul class="mui-table-view menus">
                        <li class="mui-table-view-cell" val-data="/page1">
                            <a class="mui-navigate-right">MENU1</a>
                        </li>
                        <li class="mui-table-view-cell" val-data="/page2">
                            <a class="mui-navigate-right">MENU2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <!-- 主页面容器 -->
        <div class="mui-inner-wrap">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data () {
            return {
            }
        },
        methods: {
            toMenu (path) {
                this.$router.push(path)
            }
        },
        mounted () {
            let _this = this
            mui('.menus').on('tap', 'li', function (e) {
                let path = this.getAttribute('val-data')
                _this.toMenu(path)
            })
        }
    }
</script>

<style scoped>

</style>
