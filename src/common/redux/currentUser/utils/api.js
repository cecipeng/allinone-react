// ====== Util ====== //
import UTIL from '../../../utils/utils'

// ====== Constant ====== //
import apiEndpointConstants from '../../../utils/apiEndpointConstants'

const updateLangTypeApi = params => {
  return UTIL.request(
    apiEndpointConstants.UPDATE_LANG_TYPE[1],
    apiEndpointConstants.UPDATE_LANG_TYPE[0],
    params
  )
}
export default updateLangTypeApi
