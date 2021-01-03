import React, { Component } from "react";
import { Link } from "react-router-dom";
import { feedSvg } from "../data/config";
class Feed extends Component {
    render() {
        return (
            <div className="left__feed">
                <header className="p_content">
                    <figure>
                        <img
                            src="images/profile__img.jpg"
                            alt="profile__miniimg"
                        />
                        <figcaption>d_a__m_i</figcaption>
                    </figure>
                    <button type="button" className="more">
                        더보기
                    </button>
                </header>
                <figure className="main__img">
                    <img src="images/main__img.jpg" alt="main__img" />
                </figure>
                <div className="feed__menu p_content">
                    <ul>
                        <li>{feedSvg[0]}</li>
                        <li>
                            <Link to="/">{feedSvg[1]}</Link>
                        </li>
                        <li>
                            <Link to="/">{feedSvg[2]}</Link>
                        </li>
                    </ul>
                    <button type="button">{feedSvg[3]}</button>
                </div>
                <figure className="feedLike p_content">
                    <img src="images/profile__img.jpg" alt="profile__img" />
                    <figcaption>
                        <strong>d_a__m_i</strong> 님 외 10명이 좋아합니다.
                    </figcaption>
                </figure>
                <div className="feed__paragraph p_content">
                    <span>
                        <strong>d_a__m_i</strong>
                    </span>
                    <p>
                        오늘 만나서 너무 반가웠어요! 16기 위코더 분들 항상
                        응원합니다. 🥰
                        <span className="feed__paragraph__more">
                            <Link to="">더보기</Link>
                        </span>
                    </p>
                </div>
                <div className="feed__comment__list p_content">
                    <ul className="feed__items"></ul>
                    <span className="time">57분전</span>
                </div>
                <div className="comment__container">
                    <form action="" className="form__area">
                        <textarea
                            id="comment__input"
                            placeholder="댓글 달기..."></textarea>
                        <button type="button" className="onSubmit" disabled>
                            게시
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Feed;
