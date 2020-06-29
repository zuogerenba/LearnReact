### 知识补充
- 1.全局事件events

需要安装events安装依赖 `yarn add events`
导入
```
  import {EventEmiter} from 'events'
```
在DidMount监听，在WillUNmount卸载监听
- 2.setState传递的数据不可变性(不可变数据的力量)

SCU就没有意义 newState和原来的state是同一个对象

原因是关于 shouldComponentUpdate不会刷新判断的时候就是false newState.friends !== this.state.friends 不成立

推荐做法：
```
const newFriends = [...this.state.friends]
newFriends.push({})
this.setState({
  friends: newFriends
})
```
