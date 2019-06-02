import React from 'react'

export default class UserHead extends React.Component {
    render() {
        return (
            <div class="com-userhead">
                <span class="head"><img src={this.props.userInfo.userHead}/></span>
                <span class="name">{ this.props.userInfo.userName }</span>
            </div>
        )
    }
}
