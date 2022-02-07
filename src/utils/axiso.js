import axios from "axios";
import cookie from 'js-cookie'
console.log(process.env.NODE_ENV);
const service = axios.create({
    //如果是发展中的环境的话，就在路径中加入/api
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
});
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    const response = error.response
    const data = response.data
    if (response.status === 401) {
        cookie.remove('token')
    }
    if (data.message === "token失效") {
        cookie.remove('token')
    }
    alert(data.message)
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default service
