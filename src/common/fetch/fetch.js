/**
 * Created by qqwan on 2019/03/12.
 */
import axios from 'axios'
import router from '@/router/index'
import { i18n } from '@/i18n'
import { serverRootUrl } from '@/common/config/config'

export default function fetch (options) {
    return new Promise((resolve, reject) => {
        // 创建一个axios实例
        const axiosInstance = axios.create({
            // 设置默认根地址
            baseURL: serverRootUrl,
            // 设置请求超时设置
            timeout: 30 * 1000,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            withCredentials: true
        })
        // 处理请求
        axiosInstance(options).then(({ data: { retCode, msg, data } }) => {
            // 0     --- 成功
            let retCodeArray = [0]
            if (retCodeArray.indexOf(retCode) >= 0) {
                resolve({ retCode, msg, data })
            } else if (retCode === 401) {
                router.replace({path: '/login'})
                document.title = 'IPVT'
            } else if (retCode === 404) {
                router.replace({path: '/notFound'})
            } else {
                reject(data)
            }
        }).catch((error) => {
            // 请求失败时,根据业务判断状态
            if (error.response) {
                // let resMsg = error.message
            }
            reject(error)
        })
    })
}
