export const apiConfig = {
    baseURL: 'http://47.107.44.199:9080/fefull/',
    'content-Type': 'application/json',
    headers: {
        "Authorization": localStorage.accessToken || "" //身份验证，与后端约定每次请求附上token值验明是否登录 
    }
}