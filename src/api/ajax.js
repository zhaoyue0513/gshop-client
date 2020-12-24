/* 
axios二次封装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回数据不再是response,而是直接是响应体数据response.data
4. 统一处理请求错误,具体请求也可以选择处理或不处理
*/

import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

/* 1. 配置通用的基础路径和超时 */
//service是一个能发送任意请求的函数,也可以作为对象使用
const service = axios.create({
    baseURL:'/api',
    timeout:20000
})

//添加请求拦截器
service.interceptors.request.use(config => {
    //添加请求进度条
    NProgress.start()

    //必须返回config
    return config
})

//添加响应拦截器
service.interceptors.response.use(
    response => {
        //隐藏请求请求进度条,在成功的回调
        NProgress.done()

        /* 3. 成功返回数据不再是response,而是直接是响应体数据response.data */
        return response.data
    },
    error =>{
        ///隐藏请求请求进度条,在失败的回调
        NProgress.done()

        //* 4. 统一处理请求错误,具体请求也可以选择处理或不处理 */
        alert(error.message || '未知请求错误')

        //返回一个失败的promise
        Promise.reject(error)
    }
)

//暴露service
export default service







// import axios from 'axios';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css'

// const service = axios.create({
//     baseURL:'/api',
//     timeout:20000
// })
// service.interceptors.request.use(
//     config => {
//         NProgress.start()
//         return config
//     }
// )
// service.interceptors.response.use(
//     response => {
//         NProgress.done()
//         return response.data
//     } ,
//     error =>{
//         NProgress.done()
//         alert(error.message || '位置请求错误')
//         return Promise.reject(error)
//     }
// )
// export dafault service