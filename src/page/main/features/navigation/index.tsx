import React from 'react'

// ====== Components ====== //
import NavigationContent from './NavigationContent'
import EditNavModal from './EditNavModal'

// ====== Util====== //
import * as apiUtil from '../../../../util/apiUtil'
import * as adapterUtil from '../../../../util/adapterUtil'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles====== //
import './style/index.module.scss'

interface States {
  myNavigation: Array<dataType.NavCategoryInfo>; // 我的导航
  sysNavigation: Array<dataType.NavCategoryInfo>; // 系统导航
  isEditNavModalVisible: boolean; // 是否显示编辑导航弹窗
}

class Navigation extends React.Component<any, States> {
  editOrAddTagModalRef
  constructor(props) {
    super(props)

    this.state = {
      myNavigation: [],
      sysNavigation: [],
      isEditNavModalVisible: false
    }
  }

  componentDidMount = (): void => {
    this.getAllNavigationInfo()
  }

  /**
   * 获取所有个人和系统导航信息
   */
  getAllNavigationInfo = (): void => {
    apiUtil.fetchAllNavigation().then(response => {
      this.setState({
        myNavigation: adapterUtil.navigationInfoAdapter(response.data.datas.member),
        sysNavigation: adapterUtil.navigationInfoAdapter(response.data.datas.system)
      })
    })
  }

  // /**
  //  * 新增分类
  //  */
  // handleAddCategory = (newCategory: string): void => {
  //   apiUtil.addNavCategory({
  //     categoryName: newCategory
  //   }).then(() => {
  //     // 新增后重新获取导航数据
  //     this.getAllNavigationInfo()
  //   })
  // }

  /**
   * 保存更新的导航
   */
  handleSaveChange = (): void => {
    console.log(1)
  }

  /**
   * 修改分类名称（仅修改数据结构，待点击保存后才真正提交服务端）
   */
  handleChangeCategoryName = (newVal): void => {
    const { myNavigation } = this.state
    myNavigation.forEach((category, index) => {
      if (category.id === newVal.id) {
        myNavigation[index].name = newVal.name
      }
    })
    this.setState({
      myNavigation: myNavigation
    }, () => {
      console.log(myNavigation)
    })
  }

  /**
   * 编辑导航弹窗的显示隐藏
   */
  handleEditNavModalVisible = (isVisible: boolean): void => {
    this.setState({
      isEditNavModalVisible: isVisible
    })
  }

  render(): JSX.Element {
    const { isEditNavModalVisible, myNavigation, sysNavigation } = this.state
    return (
      <div className="layout-mod mod-nav">

        {/* 正文 - 导航列表 */}
        <NavigationContent
          myNavigation={myNavigation}
          sysNavigation={sysNavigation}
          handleEditNavModalVisible={this.handleEditNavModalVisible}
        />

        {/* 弹窗 - 编辑所有导航 */}
        <EditNavModal
          visible={isEditNavModalVisible}
          myNavigation={myNavigation}
          sysNavigation={sysNavigation}
          handleSaveChange={this.handleSaveChange}
          handleEditNavModalVisible={this.handleEditNavModalVisible}
          handleChangeCategoryName={this.handleChangeCategoryName}
        />
      </div>
    )
  }
}

export default Navigation
