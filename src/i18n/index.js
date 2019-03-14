/**
 * Created by qqwan on 2019/03/12.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enJson from './en'
import zhJson from './zh'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: '',
    messages: {
        'en': enJson,
        'zh_CN': zhJson
    }
})

export {i18n}
