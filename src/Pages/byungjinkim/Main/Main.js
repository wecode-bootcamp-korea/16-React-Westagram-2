import React, { Component } from 'react';
import Feed from './Component/feed';
import Comment from './Component/Comment';
import './Main.scss'

class MainKim extends Component {
  //state 초기화
  constructor(props){
    super(props);
    this.state = {
      userId: 'jin',
      comment: "",
      commentList: [],
      id : 0
    };
  }

  //댓글 target
  updateComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  }

  pressEnter = (e) => {
    if(e.key === "Enter" && this.state.comment) {
      e.preventDefault();
      this.addComment();
    }
  }
  
  //댓글 추가 기능
  addComment = (e) => {
    e.preventDefault();
    const cmt = this.state.commentList;
    const cmtArr = {
      id: cmt.length + 1, 
      name : "jin", 
      comment: this.state.comment
    };
    cmt.push(cmtArr);
    this.setState({
      comment: '',
      commentList: cmt
    })
  }
  
  
  // addComment = (e) => {
  //   e.preventDefault();
  //   const newArr = this.state.comments;
  //   this.setState({
  //     comment: '',
  //     comments: newArr
  //   });
  // };

  render() {
    return (
      <main className="Main">
      <nav className="nav_main" style={{backgroundColor: 'white'}}>
        <div className="nav_main nav_li">
          <img src="../Images/logo.png" alt="로고1" />
          <div className="input_search">
            <input type="text" defaultValue="검색" />
          </div>
          <div className="nav_right_image">
            <img src="../Images/home.png" alt="홈 이미지"/>
            <img src="../Images/airplane.png" alt="비행기 이미지"/>
            <img src="../Images/explore.png" alt="explore 이미지"/>
            <img src="../Images/emptyheart.png" alt="빈 하트 이미지"/>
            <img src="../Images/me.jpg" style={{borderRadius: '10px'}} alt="내 사진"/>
          </div>
        </div>
      </nav>
      
      <Feed 
        updateComment={this.updateComment}
        addComment={this.addComment}
      />
    </main>
    );
  }
}

export default MainKim;