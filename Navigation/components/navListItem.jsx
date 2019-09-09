import React from 'react'
import classNames from 'classNames'
export default class NavListItem extends React.Component {
    constructor (props) {
        super(props)

        this.renderItem = this.renderItem.bind(this)
    }
    static defaultProps = {
        data: [], // 列表数据
    }
    renderItem () {
        return this.props.data.map((item, index) => (
            <li key={index}>
                <a
                    className={
                        classNames(
                            'itembox',
                            {'is-fav': item.isFavor==='1'}
                        )
                    } target='_blank' href={item.navigatorUrl}>
                    <div className='list-title'>
                        <span className='list-go'>Go</span>
                        <p className='title' data-id={item.navigatorId}>{item.navigatorName}</p>
                    </div>
                    <div className='list-maintxt'>{item.description}</div>
                </a>
            </li>
        ))
    }
    render () {
        return (
            this.renderItem()
        )
    }
}