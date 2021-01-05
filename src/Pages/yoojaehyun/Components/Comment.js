import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const { userName, content } = this.props.list;
        return (
            <li>
                <div className='comment__row'>
                    <span className='user__name'>
                        <strong>{userName}</strong>
                    </span>
                    <span className='comment__content'>{content}</span>
                </div>
                <div className='like__delete'>
                    <button className='like__btn'>
                        <svg
                            aria-label='좋아요 취소'
                            fill=''
                            height='12'
                            viewBox='0 0 48 48'
                            width='12'>
                            <path
                                className='heart'
                                d='M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                        </svg>
                    </button>
                    <button type='button'>
                        <i className='far fa-trash-alt'></i>
                    </button>
                </div>
            </li>
        );
    }
}

export default Comment;
