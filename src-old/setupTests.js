import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

const mockMath = Object.create(global.Math)
mockMath.random = () => 0.5
global.Math = mockMath

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  }
}

global.localStorage = localStorageMock

// jest.mock('./utils/BugsnagUtil')
// const BugsnagUtil = require('./utils/__mocks__/BugsnagUtil')

// global.BugsnagUtil = BugsnagUtil
