import React from 'react'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles ====== //
import './style/index.module.scss'

interface Props {
  tagInfo: dataType.NavTagInfo;
}

function TagCard(props: Props): JSX.Element {
  const { tagInfo } = props
  return (
    <li key={tagInfo.id}>
      <a className="com-list-nav__item is-fav" href={tagInfo.url}>
        <div className="com-list-nav__head">
          <span className="com-list-nav__go">Go</span>
          <p className="com-list-nav__title">{tagInfo.name}</p>
        </div>
        <div className="com-list-nav__info">{tagInfo.description}</div>
      </a>
    </li>
  )
}

export default TagCard
