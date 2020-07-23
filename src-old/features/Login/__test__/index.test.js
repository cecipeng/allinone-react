import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'
import configStore from '../../../store/configStore'

// ====== Component ====== //
import Login from '../components/container'

// ====== API ====== //
import loginApi from '../utils/api'

const store = configStore()

describe('--------------- Feature Login ---------------', () => {
  describe('----- Render Components', () => {
    it('Login', () => {
      const tree = shallow(
        <Provider store={store}>
          <Login />
        </Provider>

      )
      expect(toJson(tree)).toMatchSnapshot()
    })
  })

  describe('----- API接口测试', () => {
    it('登录接口正确性：传递已有账号给后端检验', () => {
      return loginApi({
        userName: '1',
        password: '1'
      }).then(response => {
        expect(response.data.datas.userName).toBe('1')
      })
    })
  })
})

