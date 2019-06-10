import { createStore } from 'redux'
import rootReducer from './rootReducer'

const _initialState = {
    userInfo: {
        userId: localStorage.getItem('userId') || null,
        userName: localStorage.getItem('userName') || null,
        userHead: localStorage.getItem('userHead') || null,
        accessToken: localStorage.getItem('accessToken') || null
    }
}

export default function configureStore(initialState = _initialState) {
    const store = createStore(rootReducer, initialState);
    return store;
}
