import durex from '@gem-mine/durex'
import * as dataType from './data'

export interface State {
  currentUser: dataType.CurrentUser;
}

durex.model({
  name: 'main',
  state: {
    currentUser: {}
  },
  reducers: {},
  effects: {}
})
