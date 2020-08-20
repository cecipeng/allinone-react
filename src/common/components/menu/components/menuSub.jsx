import React from 'react'
import classNames from 'classnames'

export default class MenuSub extends React.Component {
  static defaultProps = {
  }
  render() {
    const { children, isActive } = this.props

    return (
      <ul className={classNames(
        'com-menu__sub',
        {'is-active': isActive}
      )}>
        { children }
      </ul>
    )
  }
}
