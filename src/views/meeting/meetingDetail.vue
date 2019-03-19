/**
* Created by qqwan on 2019/03/18.
*/
<template>
    <div class="height-full">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @tap="toMeetingList"></a>
            <h1 class="mui-title">会议详情</h1>
        </header>
        <nav class="mui-bar mui-bar-tab text-right">
            <div class="mui-btn mui-btn-primary">
                主持会议
            </div>
            <div class="mui-btn mui-btn-danger">
                结束
            </div>
        </nav>
        <div class="mui-content height-full">
            <div id="slider" class="mui-slider height-full">
                <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <a class="mui-control-item" href="#info">
                        会议信息
                    </a>
                    <a class="mui-control-item" href="#participants">
                        参会者
                    </a>
                    <a class="mui-control-item" href="#invitee">
                        受邀者
                    </a>
                    <a class="mui-control-item" href="#registration-participants">
                        注册参会者
                    </a>
                </div>
                <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-3"></div>
                <div class="mui-slider-group">
                    <div id="info" class="mui-slider-item mui-control-content mui-active">
                        <div class="mui-scroll-wrapper">
                            <div class="mui-scroll">
                                <ul class="mui-table-view">
                                    <li class="mui-table-view-cell">
                                        <label>会议主题</label>
                                        <label>QWQQWWWQ</label>
                                    </li>
                                    <li class="mui-table-view-cell">
                                        <label>会议主题</label>
                                        <label>QWQQWWWQ</label>
                                    </li>
                                    <li class="mui-table-view-cell">
                                        <label>会议主题</label>
                                        <label>QWQQWWWQ</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="participants" class="mui-slider-item mui-control-content">
                        <div class="mui-scroll-wrapper">
                            <div class="mui-scroll">
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="invitee" class="mui-slider-item mui-control-content">
                        <div class="mui-scroll-wrapper">
                            <div class="mui-scroll">
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="registration-participants" class="mui-slider-item mui-control-content">
                        <div class="mui-scroll-wrapper">
                            <div class="mui-scroll">
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                                <div>
                                    <label>会议主题</label>
                                    <label>QWQQWWWQ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'meetingDetail',
        methods: {
            toMeetingList () {
                // this.$router.push('/meeting/list')
            }
        },
        mounted () {
            mui('#slider').slider().refresh()
        }
    }
</script>

<style scoped>

</style>
