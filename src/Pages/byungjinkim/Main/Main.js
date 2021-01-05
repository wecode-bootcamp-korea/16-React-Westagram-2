import React, { Component } from 'react';
import Feed from './Component/feed';
import Nav from './Component/Nav';
import COMMENT from './Component/data';
import './Main.scss'
import '../../../Styles/byungjinkim/Reset.scss'

class MainKim extends Component {
  //state 초기화
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      commentList: [],
    };
  }

  //componentDidMount() {
    //this.setState({
      //commentList: "",
    //});
  //}

  //댓글 target
  updateComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  }
  
  //댓글 추가 기능
  addComment = (e) => {
    e.preventDefault();
    const {commentList, comment} = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: '병진',
          content: comment,
          isLiked: false
        }
      ],
      comment: "",
    });
  }

  render() {
    return (
    <main className="MainKim">
      <Nav />
      <Feed 
        updateComment={this.updateComment}
        addComment={this.addComment}
        comment={this.state.comment}
        commentList={this.state.commentList}
      />
    </main>
    );
  }
}

export default MainKim;