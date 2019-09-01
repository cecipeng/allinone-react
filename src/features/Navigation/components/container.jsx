import React from 'react'
import classNames from 'classNames'
import UTIL from '../../../common/utils'
import NavList from './navList'
import Radio, { RadioGroup } from '../../../common/components/radio/index'
import Modal from '../../../common/components/modal/index'
import Select from '../../../common/components/select/index'
Radio.Group = RadioGroup

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navListData : [], // 存储请求数据
            viewMode : '', // 列表显示模式。默认空字符串（详细模式），'listMode'（缩图模式）、'sliderMode'（收起模式）
        }
        this.requestData = this.requestData.bind(this)
        this.viewModeChange = this.viewModeChange.bind(this)
    }
    componentDidMount () {
        this.requestData()
    }
    requestData () {
        UTIL.request('get', 'api/navigator/member').then((res) => {
            if (res.data.meta.code == '0000') {
                this.setState({
                    navListData: res.data.datas
                })
                
            } else {
            this.setMessage(res.data.meta.message)
            console.log('Allinone ------> （导航模块接口错误信息）' + res.data.meta.message)
            }
        })
    }
    /**
     * 显示模式改变
     * @param {选择的模式，radio的value值} val 
     */
    viewModeChange (val) {
        let _modeClass = ''
        switch(val) {
            case 'detailMode': 
                _modeClass = ''
                break
            case 'listMode': 
                _modeClass = 'is-listmode'
                break
            case 'sliderMode': 
                _modeClass = 'is-slidermode'
                break
        }
        this.setState({
            viewMode: _modeClass
        })
    }
    render () {
        return (
            <div className='layout-mod mod-navigation'>
    	        <div
                    className={
                        classNames(
                            'navigation-box',
                            {[this.state.viewMode]: true}
                        )
                    }
                >
                    <div className='layout-wrapper'>
                        <div className='ui-maintitle maintitle-mynav' data-style='style1'>
                            <h4 className='maintitle'>我的导航</h4>      
                            <div className='frbox'>
                                <div className='viewwrap'>
                                    <Radio.Group
                                        type='button'
                                        value='b'
                                        onChange={this.viewModeChange}
                                        radioList={[
                                            {
                                                text: '详细',
                                                value: 'detailMode',
                                                icon: 'detail'
                                            },
                                            {
                                                text: '缩略',
                                                value: 'listMode',
                                                icon: 'list'
                                            },
                                            {
                                                text: '收起',
                                                value: 'sliderMode',
                                                icon: 'slider'
                                            },
                                        ]}
                                    />
                                </div>
                                <a className='ui-btn ui-btn-default btn-editor' data-size='size-s'><i className='edit'></i>编辑</a>  
                            </div>  
                        </div>
                        {/* <comError :text='showError.text' :type='showError.type' v-if='showError.show' size='smallCol'></comError> */}
                        <NavList data={this.state.navListData.member} />
                    </div>
                </div>

                <div className='layout-wrapper navigation-box-sysnav'>
                    <div className='ui-maintitle maintitle-sysnav' data-style='style1'>
                        <h4 className='maintitle'>热门导航</h4>  
                    </div>
                    <NavList data={this.state.navListData.system} />
                </div>
                {/* 弹窗：编辑导航 */}
                <Modal
                    title='编辑导航'
                    isVisible
                    isMaskClosable={false}
                    isHeader={false}
                >
                    <div className='navigation-modal-edit'>
                        {/* 我的导航 */}
                        <div className='navigation-mynav'>
                            <p className='edit-maintitle'>我的导航</p>
                            {/* <comError :text='showError.text' :type='showError.type' v-if='showError.show' size='smallCol'></comError> */}
                            {/* <draggable v-model='memberList' className='mynav-sortwrap' v-else options='{group:'category',handle:'.btn-move-category'}'> */}
                            <draggable v-model='memberList' className='mynav-sortwrap'>
                                <div className='mynav-sort' v-for='(item,index) in memberList'>
                                    <div className='ui-formrow mynav-sort-title'>
                                        <label className='form-label'>分类：</label>
                                        <div className='form-con'>
                                            <input type='text' className='form-input' v-model='item.categoryName' />
                                            <a className='btn-category-ctrl btn-move-category'></a>
                                            <a className='btn-category-ctrl btn-del-category'></a>
                                        </div>
                                    </div>
                                    {/* <draggable element='ul' className='mynav-sort-list' v-model='memberList[index].navigators' options='{group:'navigator',handle:'.btn-move-navigator'}' @start='dragging=true' @end='dragging=false' @change='log'> */}
                                    <draggable element='ul' className='mynav-sort-list' v-model='memberList[index].navigators'>
                                        <li v-for='list in memberList[index].navigators' key='list.navigatorId' >
                                            <p className='item-edit'>
                                                {/* <a className='btn-edit' v-if='list.isSystem!=1' @click='openModal2(true,list,memberList[index].categoryId,memberList[index].categoryName)'></a> */}
                                                <a className='btn-edit' v-if='list.isSystem!=1'></a>
                                                <a className='btn-del' />
                                                <a className='btn-move-navigator' />
                                            </p>
                                            {/* <p className='item-title' :data-id='list.navigatorId'>{{list.navigatorName}}</p> */}
                                            <p className='item-title' />
                                        </li>
                                    </draggable>
                                </div>
                            </draggable>
                    
                            <a className='btn-add-navigation ui-btn ui-btn-default' click='openModal2(false)'>添加导航</a>    
                        </div>  
                        {/* 我的导航 */}

                        {/* 公共导航 */}
                        <div className='navigation-sysnav'>
                            <p className='edit-maintitle'>热门导航推荐<span className='subtitle'>（点击添加到我的导航）</span></p>
                            <div className='sysnav-sort' v-for='item in sysList'>
                                <p className='sysnav-sort-text' data-id='item.categoryId'>item.categoryName：</p>
                                <ul className='sysnav-sort-list'>
                                    <li v-for='list in item.navigators' className='{isFav: list.isFavor == 1}'>
                                        <div className='item-edit'>
                                        {/* <comDropdown trigger='click' width='150px' top='30px' placement='top-end' @itemClickParent='itemClickCall'>
                                            <a slot='rel' className='btn-add btn-ctrl'></a>
                                            <ul slot='list' className='droplist'>
                                                <comDropdownItem v-for='(item, index) in memberList' className='dropitem' @click.native='http_addSystem(list,item.categoryId)' :val='item.categoryId'>{{item.categoryName}}</comDropdownItem>
                                                <li className='addcategory'>
                                                    <a className='btn-addcategory' @click='addcategory=false' v-if='addcategory'>新建分类...</a>
                                                    <div className='add-editbox' v-if='!addcategory'>
                                                        <a className='btn-add-commit ui-btn ui-btn-main' data-size='size-s' @click='http_addcategory'>创建</a>
                                                        <p className='add-input'><input type='text' className='form-input' v-model='addcategoryText'></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </comDropdown> */}
                                        </div>
                                        <p className='item-title' data-id='list.navigatorId'>list.navigatorName</p>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                        {/* ／公共导航 */}
                    </div>
                </Modal>

        {/* 弹窗：新建导航 */}
        <Modal
            title={true ? '编辑导航' : '新建导航'}
            okBtn={true ? '修改' : '保存'}
            isVisible
            style='modal-addNav'
        >
        
            <div className='formwrap'>
                <div className='ui-formrow'>
                    <label className='form-label'>分类</label>
                    <div className='form-con' style={{width:'70%'}}>
                        {/* <comDropdown trigger='hover' placement='bottom' :disabled='editNavigation ? true : false' @itemClickParent='itemClickCall'>
                            <a slot='rel' className='btn-rel btn-rel-category'>
                                <span className='selector-btn' :data-id='curEditElement.categoryId'>{{curEditElement.categoryName}}</span>
				                <i className='dropdown-arrow'></i>
                            </a>
                            <ul slot='list' className='droplist'>
                                <comDropdownItem v-for='(item, index) in memberList' className='dropitem' :val='item.categoryId'>{{item.categoryName}}</comDropdownItem>
                                <li className='addcategory'>
                                    <a className='btn-addcategory' @click='addcategory=false' v-if='addcategory'>新建分类...</a>
                                    <div className='add-editbox' v-if='!addcategory'>
                                        <a className='btn-add-commit ui-btn ui-btn-main' data-size='size-s' @click='http_addcategory'>创建</a>
                                        <p className='add-input'><input type='text' className='form-input' v-model='addcategoryText'></p>
                                    </div>
                                </li>
                            </ul>
                        </comDropdown> */}
                    </div>
                </div>
                {/* <div className='ui-formrow' className='{'form-error':formStatus.navigatorName.status===1}'> */}
                <div className='ui-formrow' className='form-error'>
                    <label className='form-label'>导航名称</label>
                    <div className='form-con'>
                        <input type='text' className='form-input' v-model='curEditElement.navigatorName' />
                    </div>
                    <p className='form-tip'>formStatus.navigatorName.tiptxt</p>
                </div>
                <div className='ui-formrow' className='form-error'>
                    <label className='form-label'>导航地址</label>
                    <div className='form-con'>
                        <input type='text' className='form-input' v-model='curEditElement.navigatorUrl' />
                    </div>
                    <p className='form-tip'>formStatus.navigatorUrl.tiptxt</p>
                </div>
                <div className='ui-formrow' className='form-error'>
                    <label className='form-label'>导航简介</label>
                    <div className='form-con'>
                        <textarea type='text' className='form-input' v-model='curEditElement.description' />
                    </div>
                    <p className='form-tip'>formStatus.description.tiptxt</p>
                </div>
            </div>
            {/* 弹窗：新建导航 */}
        </Modal>
    </div>
        )
    }
}