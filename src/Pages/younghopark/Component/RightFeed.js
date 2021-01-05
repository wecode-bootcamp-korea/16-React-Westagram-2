import React, { Component } from 'react';
import '../Main/Main.scss';
import users from '../img/user.png';
import picture2 from '../img/picture2.png';
import picture3 from '../img/picture3.png';
import picture4 from '../img/picture4.png';
import picture5 from '../img/picture5.png';

class RightFeed extends Component{
  render() {
    return(
      <div className="RightFeed">
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
          <div className="other">
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
    )
  }
}

export default RightFeed;