import axios from 'axios'

// ====== Constants ====== //
import { routerConstants } from '../../common/utils/constants'
import { apiConfig } from './constants'

const UTIL = {
    request: (method, url, params) => {
        let config = apiConfig

        method = method.toUpperCase();

        if (method === 'GET') {
            config = params && Object.assign({}, config , {
                params: params
            })
        } else if (method === 'POST') {
            config = params && Object.assign({}, config , {
                // data: JSON.stringify(params)
                data: params
            })
        }

        config = Object.assign({}, config , {
            url: url,
            method: method
        })

        return axios(config).then(function (response) {
            switch(response.data.meta.code) {
                case "1001": //未登录
                    window.location.href = routerConstants.LOGIN //跳转到登录页
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
                // 统一跳转到一个网络异常的界面
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