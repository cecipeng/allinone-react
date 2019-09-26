import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

// ====== Component ====== //
import { Login } from '../components/container'

describe('features -> Login -> container', () => {
  it('renders as expected', () => {
    const tree = shallow(
      <Login />
    );
    expect(toJson(tree)).toMatchSnapshot()
  })
})