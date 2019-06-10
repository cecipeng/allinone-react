import axios from 'axios'
import { apiConfig } from './constants'

const UTIL = {
    request: function (method,url,params) {
        method = method.toUpperCase();
        let config = apiConfig
        if (method === 'GET') {
            if (params) {
                apiConfig = Object.assign({}, apiConfig , {
                    params: params
                })
            }
        } else 
        if (method === 'POST') {
            
            config = Object.assign({}, config , {
                // data: JSON.stringify(params)
                data: params
            })
        }
        config = Object.assign({}, config , {
            url: url,
            method: method
        })
        return axios(config)
        .then(function (response) {
            switch(response.data.meta.code) {
                case "1001": //未登录
                    window.location.href = '/login' //跳转到登录页
                    break;
                case "1002": //请求参数错误
                    // const mess = {
                    //     show: true, //是否显示提示
                    //     content: "参数错误，请重试～", //内容
                    //     type: "error", //类型
                    //     showClosebtn: true //是否显示关闭按钮
                    // }
                    // store.commit('setMessage',mess);
                    // console.log("Allinone："+response.data.meta.message);
                    break;
                case "1003": //网络异常
                    break;
                default: //请求成果,或其他业务返回码
                    return response
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default UTIL