import React, { useState } from 'react'

// ====== Components ====== //
import { Input } from 'fish'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles ====== //
import './style/index.module.scss'

interface Props {
  category: dataType.NavCategoryInfo;
  isMyNav: boolean; // 是否可编辑
  handleChangeCategoryName: Function;
  handleEditOrAddTagModalVisible: Function;
}

function CategoryItem(props: Props): JSX.Element {
  const { isMyNav, category, handleChangeCategoryName, handleEditOrAddTagModalVisible } = props
  const [ editCategory, setEditCategory ] = useState(props.category)
  return (
    <div className="nav-edit__category">
      {
        isMyNav ? (
          <div className="nav-edit__category-title">
            <label className="nav-edit__category-label">分类：</label>
            <div className="nav-edit__category-con">
              <Input type="text" value={editCategory.name} onBlur={(): void => {handleChangeCategoryName(editCategory)}} onChange={(e): void => {setEditCategory({...editCategory, name: e.target.value})}} />
              <span className="nav-edit__category-ctrl nav-edit__category-ctrl--move"></span>
              <span className="nav-edit__category-ctrl nav-edit__category-ctrl--del"></span>
            </div>
          </div>
        ) : (
          <p className="nav-edit__category-title">{category.name}</p>
        )
      }
      <ul className="nav-edit__list">
        {
          editCategory.tags.map((tag) => (
            <li key={tag.id}>
              {
                isMyNav && (
                  <div className="nav-edit__ctrl">
                    {
                      !tag.isSystem && (<span className="nav-edit__ctrlbtn nav-edit__ctrlbtn-edit" onClick={(): void => {handleEditOrAddTagModalVisible(true, tag.id)}}></span>)
                    }
                    <span className="nav-edit__ctrlbtn nav-edit__ctrlbtn-del"></span>
                    <span className="nav-edit__ctrlbtn nav-edit__ctrlbtn-move"></span>
                  </div>
                )
              }
              <p className="nav-edit__tagtitle">{tag.name}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryItem
