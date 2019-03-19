/**
* Created by qqwan on 2019/03/19.
*/
<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">邀请参会人</h1>
        </header>
        <div class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
                <!--<div @longtap="pasteParticipant" class="paste-div" @doubletap="test" >-->
                    <!--长按粘贴邀请人 -->
                <!--</div>-->
                <input @longtap="pasteParticipant" class="paste-div" @doubletap="test"/>
                <div class="source" contenteditable="true">Try copying text from this box...</div>
                <div class="target" contenteditable="true">...and pasting it into this one</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'inviteParticipant',
        methods: {
            pasteParticipant (e) {
                mui.toast('-long tap----' + this.innerText)
            },
            test () {
                mui.toast('---------')
            },
            init () {
                mui.init({
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
            },
            mounted () {
                this.init()
                const target = document.querySelector('div.target')

                target.addEventListener('paste', (event) => {
                    let paste = (event.clipboardData || window.clipboardData).getData('text')
                    paste = paste.toUpperCase()

                    const selection = window.getSelection()
                    if (!selection.rangeCount) return false
                    selection.deleteFromDocument()
                    selection.getRangeAt(0).insertNode(document.createTextNode(paste))

                    event.preventDefault()
                })
            }
        }
    }
</script>

<style scoped>
    .paste-div{
        color: grey;
        height: 40px;
    }
    div.source, div.target {
        border: 1px solid gray;
        margin: .5rem;
        padding: .5rem;
        background-color: #e9eef1;
    }
</style>
