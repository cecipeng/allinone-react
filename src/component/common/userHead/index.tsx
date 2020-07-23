import React from 'react'
import classnames from 'classnames'

// ====== Components ====== //
import { Avatar } from 'fish'

// ====== Styles ====== //
import './index.module.scss'

interface Props {
  showName?: boolean;
  layout?: string;
  shape?: 'circle' | 'square' | undefined;
  size?: number | 'default' | 'large' | 'small' | undefined;
  head: string;
  name: string;
}

UserHead.defaultProps = {
  showName: true,
  layout: '',
  shape: 'circle',
  size: 'default'
}

export default function UserHead(props: Props): JSX.Element {
  const {
    showName, layout, shape, size, head, name
  } = props
  return (
    <div
      className={classnames(
        'com-userhead',
        { [`com-userhead--${layout}`]: layout }
      )}
    >
      <span className="head">
        <Avatar size={size || 'default'} icon="user" shape={shape || 'circle'} src={head} />
      </span>
      {
        name && showName && <span className="name">{name}</span>
      }
    </div>
  )
}
