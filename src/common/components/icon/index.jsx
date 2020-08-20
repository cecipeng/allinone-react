import React from 'react'
import classNames from 'classnames'

const Icon = (props) => {
  const type = props.type
  const style = props.style
  const custormClass = props.custormClass
  return (
    <span className={`com-icon ${custormClass}`} style={style}>
      <svg className="com-icon__svg" aria-hidden="true">
        <use xlinkHref={`#${type}`} />
        <style>
          {
            `.com-icon__svg {
              width: 100%; 
              height: 100%;
              vertical-align: 0.15em;
              fill: currentColor;
              overflow: hidden;
            }`
          }
        </style>
      </svg>
    </span>
  )
}

export default Icon
