import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
    config => {
        // 添加 icode
        config.headers.icode = '7D29FCBBBD5F729F'
        // 必须返回 config
        return config
    }
)

/**
 * 响应拦截器
 * 
 */
service.interceptors.response.use(response => {
    const { success, data, message } = response.data
    if (success) {
        return data
    }
    // TODOS:业务请求错误
    return Promise.reject(new Error(message))
})
export default service