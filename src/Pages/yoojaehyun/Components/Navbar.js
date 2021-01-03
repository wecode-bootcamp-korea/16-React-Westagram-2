import React, { Component } from "react";
import { Link } from "react-router-dom";
import { navbarSvg } from "../data/config.js";
class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="navbar">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <form action="" className="search__wrap">
                        <div className="search">
                            <input
                                type="text"
                                placeholder="검색"
                                id="input__item"
                            />
                            <span id="icon" className="search__icon"></span>
                            <button id="icon2" type="button"></button>
                        </div>
                    </form>
                    <ul className="navMenu__right">
                        <li className="navMenu">
                            <Link to="">{navbarSvg[0]}</Link>
                        </li>
                        <li className="navMenu">
                            <Link to="">{navbarSvg[1]}</Link>
                        </li>
                        <li className="navMenu">
                            <Link to="">{navbarSvg[2]}</Link>
                        </li>
                        <li className="navMenu">
                            <Link to="">{navbarSvg[3]}</Link>
                        </li>
                        <li className="profile__menu navMenu">
                            <span className="nav__profile__img">
                                <img
                                    src="/images/myimg.png"
                                    alt="my__profile img"
                                />
                            </span>
                            <ul className="sub__Menu d_none">
                                <li className="">
                                    <span className="d_block">
                                        <i className="fas fa-user-alt"></i>
                                    </span>
                                    <span className="d_block">
                                        <Link to="">프로필</Link>
                                    </span>
                                </li>
                                <li className="">
                                    <span className="d_block">
                                        <i className="far fa-bookmark"></i>
                                    </span>
                                    <span className="d_block">
                                        <Link to="">저장됨</Link>
                                    </span>
                                </li>
                                <li className="">
                                    <span className="d_block">
                                        <i className="fas fa-cog"></i>
                                    </span>
                                    <span className="d_block">설정</span>
                                </li>
                                <li className="">
                                    <span className="d_block">
                                        <i className="fas fa-exchange-alt"></i>
                                    </span>
                                    <span className="d_block">계정 전환</span>
                                </li>
                                <li className="">
                                    <span className="d_block">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </span>
                                    <span className="d_block">로그아웃</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
