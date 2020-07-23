import React from 'react'

// ====== Components ====== //
import Icon from '../../../common/components/icon/index'

const UserHead = (userInfo) => {
  return (
    <div className="com-userhead">
      <span className="head">
        {
          userInfo.userHead ?
            <img src={userInfo.userHead} alt="" />
            :
            <Icon type="icon-default-head" />
        }
      </span>
      {
        userInfo.userName && <span className="name">{userInfo.userName}</span>
      }
    </div>
  )
}

export default UserHead
