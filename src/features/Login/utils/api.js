// ====== Util ====== //
import UTIL from '../../../common/utils/utils'

// ====== Constant ====== //
import { apiEndpointConstants } from '../../../common/utils/apiEndpointConstants'


export const signInApi = (params) => {
    return UTIL.request(apiEndpointConstants.SIGN_IN[1], apiEndpointConstants.SIGN_IN[0], params)
}
