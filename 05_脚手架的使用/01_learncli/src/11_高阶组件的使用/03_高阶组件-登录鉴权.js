import React, { PureComponent } from 'react'

// 高阶组件
function WithAuth(Component) {
  return props => {
    const {isLogin} = props
    return isLogin? <Component {...props}/> : <Login />
  }
}

// 购物车
class Cart extends PureComponent {
  render() {
    return <h2>购物车</h2>
  }
}
class Login extends PureComponent {
  render() {
    return <h2>登录界面</h2>
  }
}

const WithCart = WithAuth(Cart)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <WithCart isLogin={true} />
      </div>
    )
  }
}
