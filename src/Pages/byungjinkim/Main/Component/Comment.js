import React, {Component , Fragment} from 'react';


class Comment extends Component {
  render() {
    const { comment, name } = this.props;

    return (
      <div className="Comment" >
        <div className="cmt_value">{name} : {comment}</div>
      </div>
    );
  }
}

export default Comment;