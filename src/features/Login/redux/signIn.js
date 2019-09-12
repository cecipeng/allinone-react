import { SubmissionError } from 'redux-form'

// ====== Constant ====== //
import { actionTypes } from '../utils/constants';
import { routerConstants } from '../../../common/utils/routerConstants';

// ====== Api ====== //
import { signInApi } from '../utils/api';

// ====== Action ====== //
import * as currentUserAction from '../../../common/redux/currentUser/actions'

// action creator
export const action = (params, history) => {
    return function () {
        return (
            signInApi(params)
                .then((response) => {
                    if (response.data.meta.code === '2001') {
                        throw new SubmissionError({
                          _error: '帐号或者密码错误！!'
                        })
                    } else if (response.data.meta.code === '0000') {
                        // 3.存储localStorage
                        localStorage.setItem('userId', response.data.datas.userId);
                        localStorage.setItem('userName', response.data.datas.userName);
                        localStorage.setItem('userHead', response.data.datas.userHead);
                        localStorage.setItem('accessToken', response.data.datas.accessToken);

                        // 4.存储用户信息到store
                        currentUserAction.updateCurrentUserAction(response.data.datas)

                        // 5.跳转到前一个页面
                        history.push(routerConstants.HOME)
                    }
              
                })
                .catch((error) => {
                    
                })
        )
    }
}

// reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_CURRENT_USER:
            return action.payload
        default: return state
    }
}
