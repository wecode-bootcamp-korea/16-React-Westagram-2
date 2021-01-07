import React, { Component } from 'react';
import '../Main/Main.scss';
import CommentData from './Data';
import Comment from './Comment';

class Feed extends Component{
  constructor() {
    super()

    this.state = {
      commentValue: '',
      commentList: [] 
    }
  }

  componentDidMount() {
    this.setState({
      commentList: CommentData
    });
  }

  handleCommentValue = e => {
    this.setState({
      commentValue : e.target.value
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
          userName: 'youngho',
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
          <div className="commentMes">
            <div className="message">
            {commentList.map((el , index) => {
              return (
                <Comment 
                  keys ={index}
                  user={el.userName}
                  content={el.content}
                />
              )
            })}
            </div>
          <span className="date">1일전</span>
        </div>
        </div>
        <div className="inputContainer">
          <form className="typeComment">
            <input 
              className="inputBox" 
              type="text"
              placeholder="댓글 달기..." 
              id = "item"
              onChange={this.handleCommentValue}
              value={commentValue}
            />
           </form> 
          <button 
            className="buttonBox" 
            type="button"
            onClick={this.addComment}
            id ="submit"
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Feed;