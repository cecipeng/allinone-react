import React, { useState, useEffect } from 'react'
import intl from '@gem-mine/intl'
import _ from 'lodash'

// ====== Components ====== //
import { Modal, Button } from 'fish'
import CategoryItem from './CategoryItem'
import EditOrAddTagModal from './EditOrAddTagModal'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles ====== //
import './style/index.module.scss'

const { confirm } = Modal

interface Props {
  visible: boolean;
  myNavigation: Array<dataType.NavCategoryInfo>;
  sysNavigation: Array<dataType.NavCategoryInfo>;
  handleSaveChange: Function;
  handleEditNavModalVisible: Function;
  handleChangeCategoryName: Function;
}

function EditNavModal(props: Props): JSX.Element {
  const { visible, myNavigation, handleSaveChange, handleEditNavModalVisible, handleChangeCategoryName } = props
  const [editTagId, setEditTagId] = useState('') // 编辑的标签id，为空表示是新增标签
  const [isEditOrAddTagModalVisible, setIsEditOrAddTagModalVisible] = useState(false) // 是否显示编辑or新增标签弹窗
  const [editMyNavigation, setEditMyNavigation] = useState<Array<dataType.NavCategoryInfo>>([])
  let editOrAddTagModalRef

  useEffect(() => {
    setEditMyNavigation(myNavigation)
  }, [myNavigation])
  /**
   * 编辑or新增导航标签
   */
  const modifyTag = (values): void => {
    const _editMyNavigation = editMyNavigation
    let isNeedAddTag = false
    const _catogoryIndex = _.findIndex(_editMyNavigation, {id: values.categoryId})
    const _tagsList = _editMyNavigation[_catogoryIndex].tags
    if (editTagId.length > 0) { // 编辑标签
      const _tagIndex = _.findIndex(_tagsList, {id: editTagId})
      if (_tagIndex > 0) { // 没有修改分类，直接修改具体数据
        const _tag = _tagsList[_tagIndex]
        _tag['name'] = values.tagName
        _tag['url'] = values.tagUrl
        _tag['description'] = values.tagDescription
      } else { // 修改分类，删除原有分类下，以新增方式在新分类下创建标签
        _editMyNavigation.forEach((category) => {
          const tag = _.find(category.tags, {id: editTagId})
          tag && _.remove(category.tags, tag)
          isNeedAddTag = true
        })
      }
    }

    // 新增标签
    if (isNeedAddTag || editTagId.length === 0) {
      _tagsList.push({
        'id': '', // 先置空，后台生成
        'name': values.tagName,
        'url': values.tagUrl,
        'description': values.tagDescription,
        'isFavor': 0, // 初始默认不收藏
        'isSystem': 0 // 自定义标签
      })
    }

    setEditMyNavigation(_editMyNavigation)
  }

  /**
   * 仅本地更新数据，不提交服务端 - 编辑or新增导航标签
   */
  const handleEditOrAddTag = (): void => {
    const { form } = editOrAddTagModalRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      modifyTag(values) // 修改对应state
      handleEditOrAddTagModalVisible(false, '') // 关闭弹窗
    })
  }

  /**
  * 弹窗的显示隐藏 - 编辑或新增标签
  * isVisible：显示弹窗
  * tagId：编辑的导航id
  */
  const handleEditOrAddTagModalVisible = (isVisible: boolean, tagId: string): void => {
    // 关闭弹窗时，重置表单的值
    if (!isVisible) {
      const { form } = editOrAddTagModalRef.props
      form.resetFields()
    }
    setIsEditOrAddTagModalVisible(isVisible)
    setEditTagId(tagId.length > 0 ? tagId : '')
  }

  const handleEditOrAddTagModalRef = formRef => {
    editOrAddTagModalRef = formRef
  }

  return (
    <>
      <Modal
        wrapClassName="mod-nav-modal"
        width="1000px"
        visible={visible}
        maskClosable={false}
        okText={intl.get('COM_SAVE')}
        onOk={(): void => {handleSaveChange(editMyNavigation)}}
        onCancel={(): any => {confirm({
          title: intl.get('COM_MODAL_INFO_TITLE'),
          content: (
            <p>{intl.get('NAVIGATION_MODAL_EDIT_CLOSE_TIP')}</p>
          ),
          onOk() {
            handleEditNavModalVisible(false)
          }
        })}}
      >
        <div className="nav-edit__box nav-edit__box--mynav">
          <p className="nav-edit__title">{intl.get('NAVIGATION_TITLE_MINE')}</p>
          <div className="nav-edit__content">
            {
              editMyNavigation.length > 0 && editMyNavigation.map((category) => (
                <CategoryItem
                  key={category.id}
                  isMyNav={true}
                  category={category}
                  handleChangeCategoryName={handleChangeCategoryName}
                  handleEditOrAddTagModalVisible={handleEditOrAddTagModalVisible}
                />
              ))
            }
          </div>
          <Button className="nav-edit____addbtn" onClick={(): void => {handleEditOrAddTagModalVisible(true, '')}}>{intl.get('NAVIGATION_MODAL_TITLE_ADD')}</Button>
        </div>

        {/* 公共导航 */}
        <div className="nav-edit__box nav-edit__box--sysnav">
          <p className="nav-edit__title">
            {intl.get('NAVIGATION_MODAL_TITLE_HOT')}
            <span className="nav-edit__subtitle">{intl.get('NAVIGATION_TITLE_HOT_SUB')}</span>
          </p>
          <div className="nav-edit__content">
            {
              props.sysNavigation.map((category) => (
                <CategoryItem
                  key={category.id}
                  isMyNav={false}
                  category={category}
                  handleChangeCategoryName={handleChangeCategoryName}
                  handleEditOrAddTagModalVisible={handleEditOrAddTagModalVisible}
                />
              ))
            }
          </div>
        </div>
      </Modal>

      {/* 弹窗 - 新增或编辑标签 */}
      {
        isEditOrAddTagModalVisible && (
          <EditOrAddTagModal
            editTagId={editTagId}
            visible={true}
            myNavigation={editMyNavigation}
            handleEditOrAddTag={handleEditOrAddTag}
            // handleAddCategory={handleAddCategory}
            handleEditOrAddTagModalVisible={handleEditOrAddTagModalVisible}
            wrappedComponentRef={handleEditOrAddTagModalRef}
          />
        )
      }
    </>
  )
}

export default EditNavModal
