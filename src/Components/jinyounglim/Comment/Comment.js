import React from "react";

export class Comment extends React.Component {
  render() {
    const { cmtList } = this.props;
    return (
      <ul className="cmt_list feeds_txt">
        {cmtList.map(el => {
          return (
            <li key={el.id}>
              <p>
                <strong className="user_id">{el.userId}</strong>
                {el.cmt}
              </p>
              <button className="btn_heart btn_small btn_com">Like</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Comment;
