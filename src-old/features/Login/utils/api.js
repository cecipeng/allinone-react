// ====== Util ====== //
import UTIL from '../../../common/utils/utils'

// ====== Constant ====== //
import apiEndpointConstants from '../../../common/utils/apiEndpointConstants'

const loginApi = params => {
  return UTIL.request(
    apiEndpointConstants.LOGIN[0],
    apiEndpointConstants.LOGIN[1],
    params
  )
}
export default loginApi
