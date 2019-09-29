import React from 'react'

export default class UserHead extends React.Component {
  render() {
    const { userInfo } = this.props
    return (
      <div className='com-userhead'>
        <span className='head'>
          <img src={userInfo.userHead} alt='' />
        </span>
        <span className='name'>{userInfo.userName}</span>
      </div>
    )
  }
}
