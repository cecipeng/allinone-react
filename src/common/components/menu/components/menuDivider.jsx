import React from 'react'
import classNames from 'classnames'

export default class MenuDivider extends React.Component {
  static defaultProps = {
  }
  render() {
    const { children, isActive } = this.props

    return (
      <li className='com-menu__divider' />
    )
  }
}
