import React, { PureComponent } from 'react'

import axios from 'axios'
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // 1.发送请求, 返回的是promise
    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'qiu',
    //     age: 18
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(err=>{
    //   console.error(err)
    // })

    axios.get("https://httpbin.org/get",{
      params: {
        name: 'qmj'
      }
    }).then(console.log); // 第一个参数url，第二个是参数
    axios.post('https://httpbin.org/post',{
      name: 'qqq'
    }).then(console.log);
  }
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
