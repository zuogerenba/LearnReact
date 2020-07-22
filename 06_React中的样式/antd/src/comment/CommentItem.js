import React, { PureComponent } from 'react'
// import moment from 'moment'
import {
  Comment,
  Avatar,
  Tooltip
} from "antd";

import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const { nickName, avatar, content, datetime } = this.props.comment
    return (
      <Comment
        actions={[
          <span onClick={e => this.removeItem()}><DeleteOutlined /> 删除</span>
        ]}
        author={<a href="#/">{nickName}</a>}
        avatar={<Avatar src={avatar} alt={nickName} />}
        content={
          <p>
            {content}
          </p>
        }
        datetime={
          <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
      />
    )
  }
  removeItem() {
    this.props.removeItem()
  }
}
