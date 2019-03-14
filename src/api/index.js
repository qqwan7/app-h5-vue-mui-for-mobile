/**
 * Created by qqwan on 2019/03/12.
 */
const apiObject = {}

const install = (Vue) => {
    if (install.installed) {
        return
    }
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $fetch: {
            get () {
                return apiObject
            }
        }
    })
}

export default {install}
