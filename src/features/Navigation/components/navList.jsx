import React from 'react'
import NavListItem from './navListItem'
export default class NavList extends React.Component {
    constructor (props) {
        super(props)
    }
    static defaultProps = {
        data: [], // 列表数据
    }
    render () {
        console.log(this.props.data);
        const _list = this.props.data.map((item, index) =>
            <div className='navigation-box__box' key={index}>
                <div className='ui-maintitle' data-style='style2'>
                    <h4 className='maintitle' data-id={item.categoryId}>{item.categoryName}</h4>     
                </div>
                <div className='com-list-navigation'>
                    <ul className='menulist'>
                        <NavListItem data={item.navigators} />
                    </ul>
                </div>
            </div>
        )
        return (
            <div className='navigation-box navigation-mod-list'>
                {_list}
            </div>
        )
    }
}