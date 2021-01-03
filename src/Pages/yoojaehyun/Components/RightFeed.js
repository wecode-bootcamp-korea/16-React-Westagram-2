import React, { Component } from "react";
import { Link } from "react-router-dom";
class RightFeed extends Component {
    render() {
        return (
            <aside>
                <header className="p_content">
                    <figure className="my__profile">
                        <img src="images/myimg.png" alt="myimg__profile" />
                        <figcaption>
                            <strong>raihyun</strong>
                            <span className="subtitle d_block">
                                WeCode | 위코드
                            </span>
                        </figcaption>
                    </figure>
                    <button type="button">
                        <Link to="">전환</Link>
                    </button>
                </header>

                <div className="recom__container p_content">
                    <header>
                        <h2>회원님을 위한 추천</h2>
                        <Link to="">모두 보기</Link>
                    </header>
                    <ul className="list__container">
                        <li>
                            <div className="recomed__row">
                                <span className="round">
                                    <img
                                        src="images/recom__img1.jpg"
                                        alt="recommend__user"
                                    />
                                </span>
                                <div>
                                    <span className="d_block">yoona_lim</span>
                                    <span className="time">
                                        회원님을 위한 추천
                                    </span>
                                </div>
                            </div>
                            <button type="type=">팔로우</button>
                        </li>
                        <li>
                            <div className="recomed__row">
                                <span className="round">
                                    <img
                                        src="images/recom_img2.jpg"
                                        alt="recommend__user"
                                    />
                                </span>
                                <div>
                                    <span className="d_block">sooyaaa__</span>
                                    <span className="time">
                                        회원님을 위한 추천
                                    </span>
                                </div>
                            </div>
                            <button type="type=">팔로우</button>
                        </li>
                        <li>
                            <div className="recomed__row">
                                <span className="round">
                                    <img
                                        src="images/recom_img3.jpg"
                                        alt="recommend__user"
                                    />
                                </span>
                                <div>
                                    <span className="d_block">taeyeon_ss</span>
                                    <span className="time">
                                        회원님을 위한 추천
                                    </span>
                                </div>
                            </div>
                            <button type="type=">팔로우</button>
                        </li>
                        <li>
                            <div className="recomed__row">
                                <span className="round">
                                    <img
                                        src="images/recom__img1.jpg"
                                        alt="recommend__user"
                                    />
                                </span>
                                <div>
                                    <span className="d_block">_yum_S</span>
                                    <span className="time">
                                        회원님을 위한 추천
                                    </span>
                                </div>
                            </div>
                            <button type="type=">팔로우</button>
                        </li>
                        <li>
                            <div className="recomed__row">
                                <span className="round">
                                    <img
                                        src="images/recom__img1.jpg"
                                        alt="recommend__user"
                                    />
                                </span>
                                <div>
                                    <span className="d_block">_yum_S</span>
                                    <span className="time">
                                        회원님을 위한 추천
                                    </span>
                                </div>
                            </div>
                            <button type="type=">팔로우</button>
                        </li>
                    </ul>
                </div>

                <ul className="navigation__footer">
                    <li>
                        <Link to="">소개</Link>
                    </li>
                    <li>
                        <Link to="">도움말</Link>
                    </li>
                    <li>
                        <Link to="">홍보센터</Link>
                    </li>
                    <li>
                        <Link to="">API</Link>
                    </li>
                    <li>
                        <Link to="">채용정보</Link>
                    </li>
                    <li>
                        <Link to="">개인정보처리방침</Link>
                    </li>
                    <li>
                        <Link to="">약관</Link>
                    </li>
                    <li>
                        <Link to="">위치</Link>
                    </li>
                    <li>
                        <Link to="">인기계정</Link>
                    </li>
                    <li>
                        <Link to="">해치태그</Link>
                    </li>
                    <li>
                        <span>언어</span>
                    </li>
                </ul>
                <p className="copy__Right p_content">
                    &copy; 2020 INSTAGRAM FROM FACEBOOK
                </p>
            </aside>
        );
    }
}

export default RightFeed;
