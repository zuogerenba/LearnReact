import React, { PureComponent } from 'react'


// 定义高阶组件
function EnhanceProps(WrapperComponent) {
  return props => {
    return <WrapperComponent {...props} region="江西"/>
  }
}
class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.name}  年龄: ${this.props.age} 地区: ${this.props.region}`}</h2>
  }
}
class About extends PureComponent {
  render(props) {
    return <h2>About:{`昵称：${this.props.name}  年龄: ${this.props.age} 地区: ${this.props.region}`}</h2>
  }
}
const EnhanceHome = EnhanceProps(Home)
const EnhanceAbout = EnhanceProps(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        App: {this.props.name}
        <EnhanceHome name="qmj" age={18} />
        <EnhanceAbout name="kobe" age={28} />
      </div>
    )
  }
}
export default App