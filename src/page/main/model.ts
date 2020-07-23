import durex from '@gem-mine/durex'
import * as dataType from './data'

export interface State {
  currentUser: dataType.CurrentUser;
}

durex.model({
  name: 'main',
  state: {
    currentUser: {} // 当前用户
  },
  reducers: {
    /**
     * 存储当前用户信息
     */
    updateCurrentUser(data): void {
      return this.setField({
        currentUser: data
      })
    }
  },
  effects: {}
})
