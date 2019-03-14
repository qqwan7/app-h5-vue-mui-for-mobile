/**
 * Created by qqwan on 2019/03/12.
 */
// 获取语言
export const lang = () => {
    let lang = localStorage.getItem('lang')
    if (lang === undefined || lang === null) {
        lang = navigator.language || navigator.browserLanguage
        let langArray = ['en', 'zh-CN', 'es', 'de', 'fr', 'pt']
        lang = langArray.indexOf(lang) < 0 ? 'en' : lang
        localStorage.setItem('lang', lang)
    }
    return lang
}
