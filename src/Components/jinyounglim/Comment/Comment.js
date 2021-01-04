import React from "react";

export class Comment extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        <p>
          <strong className="user_id">{this.props.userName}</strong>
          {this.props.content}
        </p>
        <button className="btn_heart btn_small btn_com">Like</button>
      </li>
    );
  }
}
export default Comment;
