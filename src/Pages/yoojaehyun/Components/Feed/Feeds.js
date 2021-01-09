import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { feedSvg } from '../../data/config';
import Comment from './Comment';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
      isLiked: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      commentList: this.props.feed.follow,
    });
  };

  handleCommentValue = (event) => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (this.state.commentValue === '') {
      return;
    }
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  addComment = (event) => {
    event.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: Date.now(),
          userName: 'raihyun',
          comment: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  isLikedToggle = (liked) => {
    console.log(liked);
    const commentList = this.state.commentList;
    const index = commentList.indexOf(liked);
    commentList[index].isLiked = !liked.isLiked;
    this.setState({ commentList });
  };

  handleDelete = (comment) => {
    const commentList = this.state.commentList.filter(
      (item) => item.id !== comment.id
    );
    this.setState({ commentList: commentList });
  };
  
  render() {
    const { commentList, commentValue } = this.state;
    const { profile, mainImg, totalLiked, myComment } = this.props.feed;
    const lengthValue = this.state.commentValue.length > 4;
    return (
      <div className='leftFeed'>
        <header className='padding_content'>
          <figure>
            <img src={profile.img} alt={profile.name} />
            <figcaption>{profile.name}</figcaption>
          </figure>
          <span type='button' className='more'></span>
        </header>
        <img src={mainImg} className='mainFeedImg' />
        <div className='feedMenuWrap padding_content'>
          <ul className='feedMenu'>
            <li>{feedSvg[0]}</li>
            <li>
              <Link to='/'>{feedSvg[1]}</Link>
            </li>
            <li>
              <Link to='/'>{feedSvg[2]}</Link>
            </li>
          </ul>
          <button type='button'>{feedSvg[3]}</button>
        </div>
        <span className='padding_content'> {totalLiked}명이 좋아합니다.</span>
        <div className='commentContainer padding_content'>
          <span>
            <strong>{profile.name}</strong>
          </span>
          <p>
            {myComment.length < 50 ? myComment : myComment.slice(0, 60) + '...'}
            <span className='feed__paragraph__more'>
              <Link to=''>더보기</Link>
            </span>
          </p>
        </div>
        <ul className='comment padding_content'>
          {commentList.map((item) => {
            return (
              <Comment
                key={item.id}
                commentList={item}
                isLikedHandle={this.isLikedToggle}
                onHandleDelete={this.handleDelete}
              />
            );
          })}
        </ul>
        <span className='time padding_content'>57분전</span>
        <form action='' className='formArea' onSubmit={this.addComment}>
          <input
            id='comment__input'
            onChange={this.handleCommentValue}
            value={commentValue}
            placeholder='댓글 달기...'
          />
          <button
            type='button'
            className={lengthValue ? 'onSubmit' : ''}
            onKeyPress={this.handleKeyPress}
            onClick={this.addComment}>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Feeds;
