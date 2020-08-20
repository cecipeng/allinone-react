import React, { Children } from 'react'
import classNames from 'classnames'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class MenuItemGroup extends React.Component {
  static defaultProps = {
  }

  constructor(props) {
    super(props)

    this.state = {
      
    }

  }

  componentDidMount() {
    
  }

  componentWillMount() {

  }

  render() {
    const { children } = this.props
    return (
      <li className='com-menu__itemgroup'
      >
        <div className="com-menu__itemgroup-title">
          xxx
        </div>
        <ul className="com-menu__itemgroup-list">
          { children}
        </ul>
      </li>
    )
  }
}
