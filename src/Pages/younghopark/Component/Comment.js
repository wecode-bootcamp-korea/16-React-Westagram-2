import React, { Component } from "react";

class Comment extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className="CommentMessage" key={this.props.key}>
        <span className="userName">{this.props.user}</span>
        <span className="content">{this.props.content}</span>
      </div>
    )
  }
}

export default Comment;