/**
* Created by qqwan on 2019/03/14.
*/
<template>
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item touch-action" :class="{'mui-active': activeKey==='/meeting/list'}" href="#meetingList" val-data="/meeting/list">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">会议</span>
        </a>
        <a class="mui-tab-item touch-action" :class="{'mui-active': activeKey==='/page2'}" href="#page2" val-data="/page2">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">page2</span>
        </a>
        <!--<a class="mui-tab-item" href="#page2" val-data="/page2">-->
            <!--<span class="mui-icon mui-icon-contact"></span>-->
            <!--<span class="mui-tab-label">通讯录</span>-->
        <!--</a>-->
        <!--<a class="mui-tab-item" href="#page2" val-data="/page2">-->
            <!--<span class="mui-icon mui-icon-gear"></span>-->
            <!--<span class="mui-tab-label">设置</span>-->
        <!--</a>-->
    </nav>
</template>

<script>
    export default {
        name: 'barTab',
        data () {
            return {
                activeKey: ''
            }
        },
        methods: {
            init () {
                this.activeKey = this.$route.path
                let _this = this
                mui('.mui-bar-tab').on('tap', '.mui-tab-item', function (e) {
                    let path = this.getAttribute('val-data')
                    this.activeKey = path
                    _this.$router.push(path)
                })
            }
        },
        mounted () {
            this.init()
        }
    }
</script>

<style scoped>

</style>
