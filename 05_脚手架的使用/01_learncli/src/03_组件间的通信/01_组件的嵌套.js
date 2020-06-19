import React, { Component } from 'react'


function Header() {
  return <h2>我是头部</h2>
}
function Main() {
  return (
    <div>
      <h2>我是头部</h2>
      <Banner />
      <List />
    </div>
  )
}
function Footer() {
  return <h2>我是头部</h2>
}
function Banner() {
  return <h2>我是banner</h2>
}
function List() {
  return (
    <div>
      <ul>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
      </ul>
    </div>
  )
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
