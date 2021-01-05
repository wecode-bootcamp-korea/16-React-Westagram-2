import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { feedSvg } from '../data/config';
import Comment from './Comment';
class Feed extends Component {
    constructor() {
        super();
        this.state = {
            commentList: [],
            commentValue: '',
            isLiked: false,
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/data/Comment.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === '200') {
                    this.setState({
                        commentList: res.data.item.commentItem,
                    });
                }
            });
    }
    handleCommentValue = (event) => {
        this.setState({
            commentValue: event.target.value,
        });
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
                    content: commentValue,
                    isLiked: false,
                },
            ],
            commentValue: '',
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
    handleDelete = (comment) => {
        const commentLists = this.state.commentList.filter(
            (item) => item.id !== comment.id
        );
        this.setState({ commentList: commentLists });
    };
    isLikedToggle = (isLikeds) => {
        console.log(`${isLikeds.isLiked}`)
    };
    render() {
        const { commentList, commentValue } = this.state;
        const lengthValue = this.state.commentValue.length > 3;
        return (
            <div className='left__feed'>
                <header className='p_content'>
                    <figure>
                        <img
                            src='images/profile__img.jpg'
                            alt='profile__miniimg'
                        />
                        <figcaption>d_a__m_i</figcaption>
                    </figure>
                    <button type='button' className='more'>
                        더보기
                    </button>
                </header>
                <figure className='main__img'>
                    <img src='images/main__img.jpg' alt='main__img' />
                </figure>
                <div className='feed__menu p_content'>
                    <ul>
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
                <figure className='feedLike p_content'>
                    <img src='images/profile__img.jpg' alt='profile__img' />
                    <figcaption>
                        <strong>d_a__m_i</strong> 님 외 10명이 좋아합니다.
                    </figcaption>
                </figure>
                <div className='feed__paragraph p_content'>
                    <span>
                        <strong>d_a__m_i</strong>
                    </span>
                    <p>
                        오늘 만나서 너무 반가웠어요! 16기 위코더 분들 항상
                        응원합니다. 🥰
                        <span className='feed__paragraph__more'>
                            <Link to=''>더보기</Link>
                        </span>
                    </p>
                </div>
                <div className='feed__comment__list p_content'>
                    <ul className='feed__items'>
                        {commentList.map((item) => {
                            return (
                                <Comment
                                    key={item.id}
                                    list={item}
                                    onHandleDelete={this.handleDelete}
                                    isLikedHandle={this.isLikedToggle}
                                />
                            );
                        })}
                    </ul>
                    <span className='time'>57분전</span>
                </div>
                <div className='comment__container'>
                    <form
                        action=''
                        className='form__area'
                        onSubmit={this.addComment}>
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
            </div>
        );
    }
}

export default Feed;
