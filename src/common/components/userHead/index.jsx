import React from 'react'

const UserHead = (userInfo) => {
  return (
    <div className='com-userhead'>
      <span className='head'>
        <img src={userInfo.userHead} alt='' />
      </span>
      <span className='name'>{userInfo.userName}</span>
    </div>
  )
}

export default UserHead
