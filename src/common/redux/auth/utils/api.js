// ====== Util ====== //
import UTIL from '../../../utils/utils'

// ====== Constant ====== //
import apiEndpointConstants from '../../../utils/apiEndpointConstants'


export const loginAuthWithPasswordApi = (params) => {
    return UTIL.request(apiEndpointConstants.LOGIN_AUTH[1], apiEndpointConstants.LOGIN_AUTH[0], params)
}

export const loginAuthWithTokenApi = (params) => {
    return UTIL.request(apiEndpointConstants.LOGIN[1], apiEndpointConstants.LOGIN[0], params)
}
