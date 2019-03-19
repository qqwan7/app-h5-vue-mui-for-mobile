/**
* Created by qqwan on 2019/03/13.
*/
<template>
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable main-container" id="offCanvasWrapper">
        <!-- 菜单容器 -->
        <aside id="offCanvasSide" class="mui-off-canvas-left">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <!-- 菜单具体展示内容 -->
                    <ul class="mui-table-view menus">
                        <li class="mui-table-view-cell" val-data="/login">
                            <a class="mui-navigate-right">退出</a>
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
            // mui.init()
            mui('#offCanvasWrapper').offCanvas().refresh()
            let _this = this
            mui('.menus').on('tap', 'li', function (e) {
                let path = this.getAttribute('val-data')
                if (path === '/login') {
                    localStorage.removeItem('token_account')
                }
                _this.toMenu(path)
            })
        }
    }
</script>

<style scoped>

</style>
