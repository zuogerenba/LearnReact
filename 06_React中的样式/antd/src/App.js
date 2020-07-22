import React, { PureComponent } from 'react'

import CommentInput from './comment/CommentInput'
import CommentItem from './comment/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div style={{width: "500px", padding: "20px"}}>
        {
          this.state.commentList.map((item,index)=>{
            return <CommentItem key={item.id} 
                                comment={item} 
                                removeItem={e=> this.removeComment(index)}/>
          })
        }
        <CommentInput submitComment={info => this.submitComment(info)}/>
      </div>
    )
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  removeComment(index) {
    const newList = [...this.state.commentList]
    newList.splice(index,1)
    this.setState({
      commentList: newList
    })
  }
}
