import React from 'react'
import intl from '@gem-mine/intl'
import _ from 'lodash'

// ====== Components ====== //
import { Modal, Select, Form, Input, Divider } from 'fish'
import {FormComponentProps} from '@sdp.nd/fish/lib/form/Form'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles ====== //
import './style/index.module.scss'

const { TextArea } = Input
const { Option } = Select
const { confirm } = Modal

interface Props extends FormComponentProps {
  editTagId: string;
  visible: boolean;
  myNavigation: Array<dataType.NavCategoryInfo>;
  handleEditOrAddTag: Function;
  // handleAddCategory: Function;
  handleEditOrAddTagModalVisible: Function;
  form: any;
}

const EditOrAddTagModal = Form.create<Props>({ name: 'AddTagModal' })(
  class AddTagModalWithForm extends React.Component<Props, any> {
    /**
     * 初始化表单数据
     */
    initEditTagInfo = (): any => {
      const { myNavigation, editTagId } = this.props
      const _tagInfo = {
        categoryId: '',
        tagId: '',
        tagName: '',
        tagUrl: '',
        tagDescription: ''
      }
      myNavigation.forEach(category => {
        const _tag = _.find(category.tags, {id: editTagId})
        if (_tag && editTagId.length > 0) {
          _tagInfo['categoryId'] = category.id
          _tagInfo['tagId'] = _tag.id
          _tagInfo['tagName'] = _tag.name
          _tagInfo['tagUrl'] = _tag.url
          _tagInfo['tagDescription'] = _tag.description
          return
        }
      })
      return _tagInfo
    }
    render(): JSX.Element {
      const { editTagId, visible, myNavigation, handleEditOrAddTag, handleEditOrAddTagModalVisible, form } = this.props
      const { getFieldDecorator } = form
      const _tagInfo = this.initEditTagInfo()
      return (
        <Modal
          title={editTagId.length > 0 ? intl.get('NAVIGATION_MODAL_TITLE_EDIT') : intl.get('NAVIGATION_MODAL_TITLE_ADD')}
          wrapClassName="mod-nav-modal"
          visible={visible}
          maskClosable={false}
          okText={intl.get('COM_ADD')}
          onOk={(): void => {handleEditOrAddTag()}}
          onCancel={(): void => {confirm({
            title: intl.get('COM_MODAL_INFO_TITLE'),
            content: (
              <p>{intl.get('NAVIGATION_MODAL_EDIT_CLOSE_TIP')}</p>
            ),
            onOk() {
              handleEditOrAddTagModalVisible(false, '')
            }
          })}}
        >
          <div className="formwrap">
            <Form layout="vertical">
              <Form.Item label={intl.get('NAVIGATION_MODAL_EDIT_LABEL_SORT')}>
                {getFieldDecorator('categoryId', {
                  initialValue: _tagInfo.categoryId
                })(
                  <Select
                    dropdownRender={menu => (
                      <>
                        {menu}
                        <Divider />
                        {/* <div className="addcategory" onMouseDown={e => e.preventDefault()}>
                          {
                            isInputingAddCategory ? (
                              <div className="add-editbox">
                                <Button type="primary" onClick={() => {handleAddCategory(addCategoryVal)}}>{intl.get('NAVIGATION_MODAL_EDIT_SORT_ADD_BTN')}</Button>
                                <p className="add-input">
                                  <Input type="text" value={addCategoryVal} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {setAddCategoryVal(e.target.value)}}></Input>
                                </p>
                              </div>
                            ) : (
                              <a className="btn-addcategory" onClick={(): void => {setInputingAddCategory(true)}}>{intl.get('NAVIGATION_MODAL_EDIT_SORT_ADD')}</a>
                            )
                          }
                        </div> */}
                      </>
                    )}
                  >
                    {
                      myNavigation.map(item => (
                        <Option key={item.id}>{item.name}</Option>
                      ))
                    }
                  </Select>
                )}
              </Form.Item>
              <Form.Item label={intl.get('NAVIGATION_MODAL_EDIT_LABEL_NAME')}>
                {getFieldDecorator('tagName', {
                  initialValue: _tagInfo.tagName,
                  rules: [{ required: true, message: intl.get('NAVIGATION_MODAL_EDIT_ERROR_TAGNAME')
                  }]})(<Input />)}
              </Form.Item>
              <Form.Item label={intl.get('NAVIGATION_MODAL_EDIT_LABEL_URL')}>
                {getFieldDecorator('tagUrl', {
                  initialValue: _tagInfo.tagUrl,
                  rules: [{ required: true, message: intl.get('NAVIGATION_MODAL_EDIT_ERROR_TAGURL')
                  }]})(<Input />)}
              </Form.Item>
              <Form.Item label={intl.get('NAVIGATION_MODAL_EDIT_LABEL_DESCRIPTION')}>
                {getFieldDecorator('tagDescription', {
                  initialValue: _tagInfo.tagDescription
                })(<TextArea rows={4} />)}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      )
    }
  }
)

export default EditOrAddTagModal
