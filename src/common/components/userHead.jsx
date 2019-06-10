import React from 'react'

export default class UserHead extends React.Component {
    render() {
        return (
            <div className="com-userhead">
                <span className="head"><img src={this.props.userInfo.userHead}/></span>
                <span className="name">{ this.props.userInfo.userName }</span>
            </div>
        )
    }
}
