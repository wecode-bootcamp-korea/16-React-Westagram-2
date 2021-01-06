import React from "react";

export class Comment extends React.Component {
  render() {
    const { key, userName, content, isLiked, activeLikeBtn } = this.props;

    return (
      <li key={key}>
        <p>
          <strong className="user_id">{userName}</strong>
          {content}
        </p>
        <button className={`btn_heart btn_com btn_small ${isLiked ? "on" : ""}`} onClick={activeLikeBtn}>
          Like
        </button>
      </li>
    );
  }
}
export default Comment;
