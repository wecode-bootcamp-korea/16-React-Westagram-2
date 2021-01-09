import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { feedSvg } from '../../data/config';
import Follows from './Follows';

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }
  componentDidMount = () => {
    const commentList = this.props.feed.map((item) => item.follow);
    this.setState({
      commentList: commentList,
    });
  };
  // handleCommentValue = (event) => {
  //   this.setState({
  //     commentValue: event.target.value,
  //   });
  // };
  render() {
    console.log(this.state.commentList, 'du?');
    console.log('전달 데이타',this.props.feed);
    return (
      <article>
        <Follows />
        {this.props.feed.map((feedItem) => {
          return (
            <div key={feedItem.id} className='leftFeed'>
              <header className='padding_content'>
                <figure>
                  <img src={feedItem.profile.img} alt={feedItem.profile.name} />
                  <figcaption>{feedItem.profile.name}</figcaption>
                </figure>
                <span className='feedMore'></span>
              </header>
              <img
                src={feedItem.mainImg}
                alt={feedItem.mainImgName}
                className='mainFeedImg'
              />
              <div className='feedMenu__container padding_content'>
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
              <p className='padding_content'>좋아요 {feedItem.totalLiked}개</p>
              <div className='commentContainer padding_content'>
                <p>
                  <strong>{feedItem.profile.name}</strong>
                  {feedItem.myComment.length > 10
                    ? feedItem.myComment.slice(0, 60) + '...'
                    : feedItem.myComment}
                  <span className='feed__paragraph__more'>
                    <Link to=''>더보기</Link>
                  </span>
                </p>
              </div>
              <ul></ul>
              <form action='' className='formArea' onSubmit={this.addComment}>
                <input
                  id='commentInput'
                  onChange={this.props.onhandleValue}
                  // value={commentValue}
                  placeholder='댓글 달기...'
                />
                <button
                  type='button'
                  className={this.props.onhandleValue > 4 ? 'onSubmit' : ''}
                  // onKeyPress={this.handleKeyPress}
                  onClick={this.props.commentAdd}>
                  게시
                </button>
              </form>
            </div>
          );
        })}
      </article>
    );
  }
}

export default FeedList;
