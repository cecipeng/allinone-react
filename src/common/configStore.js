import { createStore } from 'redux'
import rootReducer from './rootReducer'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    return store;
}

// const store = createStore(rootReducer)
// export default store