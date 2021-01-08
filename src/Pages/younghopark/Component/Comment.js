import React, { Component } from "react";

class Comment extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const {key, user, content} = this.props;

    return(
      <div className="CommentMessage" key={key}>
        <span className="userName">{user}</span>
        <span className="content">{content}</span>
      </div>
    )
  }
}

export default Comment;