import React from 'react'

// ====== Util====== //
import * as apiUtil from '../../../../util/apiUtil'

// ====== Styles====== //
import './style/index.module.scss'

class Home extends React.Component {

  handleDemo = () => {
    apiUtil.fetchDemo('cc').then(response => {
      alert(response)
    })
  }
  render(): JSX.Element {
    return (
      <div>
        <button onClick={() => { this.handleDemo()}}>请求测试</button>
      </div>
    )
  }
}

export default Home
