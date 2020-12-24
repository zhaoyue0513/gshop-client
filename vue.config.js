module.exports = {
    // lintOnSave:false, // 关闭ESLint的规则检查
    lintOnSaVE:'warning',// 输出提示错误,但项目继续运行

    devServer: { // 只用于开发环境
        proxy: {
            '/api':{ //只对以/api开头的请求进行代理转发
                target:'http://39.99.186.36', // 转发目标url
                changeOrigin: true, // 支持跨域
                //如果正确的接口路径里面没有/api,就需要把'/api'去掉
                // pathRewrite:{'^/api':''}  //由于后台接口有/api,就不用
            }
        }
    }
}

// module.exports = {
//     lintOnSave = false,// 关闭ESLint规则检查
//     lintOnSave = 'warning', // 输出提示错误,但项目继续运行
//     devServer:{ // 只用于开发环境
//         proxy:{
//             '/api':{//只对请求路由以/api开头的进行代理转发
//                 target:'http://39.99.186.36',// 转发目标url
//                 changeOrigin: true, //支持跨域

//                 pathRewrite:{'^/api':''}

//             }
//         }
//     }
// }




















