import React from 'react'

export const withAuthFactory = (Component) => {
  class withAuthComponent extends React.Component {
    componentDidMount() {

    }
  }

  function mapStateToProps(state) {
    return {
      submitFailed: hasSubmitFailed('LoginForm')(state) // 获取redux-form 的 submitFailed字段
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      currentUserAction: bindActionCreators({
        ...currentUserAction
      }, dispatch),
      loginAction: bindActionCreators(loginActionCreator, dispatch),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withAuthComponent)
}

export default withAuthFactory