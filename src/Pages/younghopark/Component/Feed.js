import React, { Component } from 'react';
import Comment from './Comment';
import '../Main/Main.scss';

class Feed extends Component{
  constructor() {
    super()
    this.state = {
      commentValue: '',
      commentList: [] 
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/CommentData.json',{

    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          commentList : data,
        });
      });
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value
    });
  }

  addComment = e => {
    e.preventDefault();
    const {commentValue, commentList} = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: '영호박',
          content: commentValue,
        }
      ],
      commentValue: ''
    });
  }

  render(){
    const {commentValue, commentList} = this.state;

    return(
      <div className="Feed">
        <div className="Comment">
          {commentList.map((comment , index) => {
            return (
              <Comment 
                key={index}
                user={comment.userName}
                content={comment.content}
              />
            )
          })}
          <span className="date">1일전</span>
        </div>
        <div className="inputContainer">
          <form className="typeComment">
            <input 
              type="text"
              placeholder="댓글 달기..." 
              id = "item"
              className="inputBox" 
              onChange={this.handleCommentValue}
              value={commentValue}
            />
           </form> 
          <button 
            type="button"
            id ="submit"
            className="buttonBox"
            onClick={this.addComment}
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Feed;