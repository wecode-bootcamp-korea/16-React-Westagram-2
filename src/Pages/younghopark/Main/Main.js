import './Main.scss';
//import '../styles/reset.scss';
import React, { Component } from 'react';

import home from '../img/home.png';
import heart from '../img/heart.png';
import users from '../img/user.png';
import picture1 from '../img/picture1.png';
import picture2 from '../img/picture2.png';
import picture3 from '../img/picture3.png';
import picture4 from '../img/picture4.png';
import picture5 from '../img/picture5.png';
import picture6 from '../img/picture6.png';
import picture7 from '../img/picture7.png';
import picture8 from '../img/picture8.png';
import more from '../img/more.png';
import bubble from '../img/speech-bubble.png';
import plane from '../img/paper-plane.png';
import bookmark from '../img/bookmark.png';

class MainPark extends Component {
  render() {
    return (
      <div class="main">
        <div class="header">
          <div className="naviBar">
            <div clclassNameass="instar">
              <h1>Westargram</h1>
            </div>
            <div className="searchBox">
              <input type="text" />
              <i className="fas fa-search"></i>
              <span className="search">검색</span>
            </div>
            <div className="icon">
              <img src={home} alt="홈아이콘" className="homeIcon" />
              <img src={heart} alt="하트아이콘" className="heartIcon" />
              <img src={users} alt="유저아이콘" className="userIcon" />
            </div> 
          </div>
        </div>
        <div className="mainCont">
          <div className="story">
            <ul className="storyList">
              <li className="storyName">
                <div className="text">
                  <img src={picture1} alt="프로필" />
                  <span>Son</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture2} alt="프로필" />
                  <span>Messi</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture3} alt="프로필" />
                  <span>Neymar</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture4} alt="프로필" />
                  <span>Suarez</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture5} alt="프로필" />
                  <span>De Bruyne</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture6} alt="프로필" />
                  <span>Grizman</span>
                </div>
              </li>
              <li className="storyName">
                <div className="text">
                  <img src={picture7} alt="프로필" />
                  <span>De Yong</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="subCont">
            <div className="introName">
              <img src={picture1} alt="프로필" />
              <span>Son</span>
            </div>
            <div className="option">
              <img src={more} alt="더보기" />
            </div>
          </div>
          <div className="contImg">
            <img src={picture8} alt="이미지" />
          </div>
          <div className="heart">
            <div className="leftIcon">
              <div className="heartBox">
                <img src={heart} alt="하트" />
              </div>
              <div className="commentBox">
                <img src={bubble} alt="말풍선" />
              </div>
              <div className="subscripBox">
                <img src={plane} alt="공유" />
              </div>
            </div>
            <div className="rightIcon">
              <img src={bookmark} alt="북마크" />
            </div>
          </div>
          <div className="comment">
            <div className="commentMes">
              <div className="good">
                <span>좋아요 60개</span>
              </div>
              <div className="message">
                <span>Kane hi</span>
                <span>Parkyoungho역시 월클 손흥민</span>
                <span>Messi Good Good!</span>
              </div>
              <div className="date">
                <span>1일전</span>
              </div>
            </div>
            <div className="inputContainer">
              <div className="type_comment">
                <input className="inputBox" type="text" placeholder="댓글 달기..." />
              </div>
              <span>
                <button className="buttonBox" type="summit">게시</button>
              </span>
            </div>
          </div>
        </div>
        <div className="rightCont">
          <div className="profile">
            <div className="myprofile">
              <div className="yourProfile">
                <img src={users} alt="내프로필" />
                <div className="myprofileId">
                  <span>qkrdudgh1701</span>
                  <span>박영호</span>
                </div>
              </div>
              <div className="change">
                <a href="#"><span>전환</span></a>
              </div>
            </div>
            <div className="userprofile">
              <div className="userPro">
                <img src={picture2} alt="상대프로필" />
                <div className="userprofileId">
                  <a href=""><span>leo Messi</span></a>
                  <span>Follows You</span>
                </div>
              </div>
              <div className="change">
                <a href="#"><span>팔로우</span></a>
              </div>
            </div>
            <div className="userprofile">
              <div className="userPro">
                <img src={picture3} alt="상대프로필" />
                <div className="userprofileId">
                  <a href=""><span>Neymar Jr</span></a>
                  <span>Follows You</span>
                </div>
              </div>
              <div className="change">
                <a href="#"><span>팔로우</span></a>
              </div>
            </div>
            <div className="userprofile">
              <div className="userPro">
                <img src={picture4}  alt="상대프로필" />
                <div className="userprofileId">
                  <a href=""><span>Luis Suaraz</span></a>
                  <span>leo messi님 외 2명이 팔로우 합니다.</span>
                </div>
              </div>
              <div className="change">
                <a href="#"><span>팔로우</span></a>
              </div>
            </div>
            <div className="userprofile">
              <div className="userPro">
                <img src={picture5} alt="상대프로필" />
                <div className="userprofileId">
                  <a href=""><span>Kevin De Bruyne</span></a>
                  <span>회원님을 위한 추천</span>
                </div>
              </div>
              <div className="change">
                <a href="#"><span>팔로우</span></a>
              </div>
            </div>
            <div className="other_box">
              <div className="other">
                <span className="otherSpan">소개</span>
                <span className="otherSpan">도움말</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">홍보 센터</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">API</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">채용 정보</span>
                <span className="otherSpan">∙</span>
              </div>
              <div className="other2">
                <span className="otherSpan">개인정보처리방침</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">약관</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">위치</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">인기 계정</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">해시태그</span>
                <span className="otherSpan">∙</span>
                <span className="otherSpan">언어</span>
              </div>
            </div>
            <div className="InstarFace">
              <span className="otherSpan">© 2020 INSTAGRAM FROM FACEBOOK</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPark;