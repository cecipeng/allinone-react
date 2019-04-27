import React from 'react';
import Header from './elements/header/header'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="layout-header">
          <Header />
        </div>
        <div class="layout-mod mod-home">
          {this.props.children}
      </div>
      </div>
    )
  }
}
