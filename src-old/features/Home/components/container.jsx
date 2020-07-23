import React from 'react'

// ====== Components ====== //
import Tab, { TabPlane } from '../../../common/components/tab/index'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const extraContent = (
      <div>
        <a>link 1</a>
        <a>link 2</a>
      </div>
    )
    return (
      <div>
        <Tab
          placement="bottom"
          defaultActivePlaneKey="cc"
          changeTabCallback={()=>{console.log('切换每个tab时触发')
          }}
          extraContent={extraContent}
          size="large"
        >
          <TabPlane tabName="aa1" tabKey="aa1" tabIcon="icon-left" handleEnterPlaneCallback={()=>{console.log('进入aa时触发')}}>
            aa1
          </TabPlane>
          <TabPlane tabName="bb" tabKey="bb" isDisabled>
            bb
          </TabPlane>
          <TabPlane tabName="cc" tabKey="cc" isDisabled>
            cc
          </TabPlane>
        </Tab>
      </div>
    )
  }
}
