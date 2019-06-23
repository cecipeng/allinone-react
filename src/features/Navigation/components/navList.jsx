import React from 'react'
export default class NavList extends React.Component {
    render () {
        return (
            <div className='navigation-box navigation-mod-list' v-for='item in memberList'>
                <div className='ui-maintitle' data-style='style2'>
                    <h4 className='maintitle' data-id='item.categoryId'>item.categoryName</h4>     
                </div>
                {/* <comListNavigation list='item.navigators'></comListNavigation> */}
                <div className='com-list-navigation'>
		            <ul className='menulist'>
			            <li v-for='item in list'>
                            <a target='_blank' className='item' href='item.navigatorUrl' className='{isFav: item.isFavor==1}'>
                                <div className='list-title'>
                                    <span className='list-go'>Go</span>
                                    <p className='title' data-id='item.navigatorId'>item.navigatorName</p>
                                </div>
                                <div className='list-maintxt'>item.description</div>
                            </a>
			            </li>
		            </ul>
	            </div>
            </div>
        )
    }
}