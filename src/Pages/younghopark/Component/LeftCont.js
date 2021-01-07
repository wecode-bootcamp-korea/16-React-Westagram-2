import React, { Component } from 'react';
import '../Main/Main.scss';
import Feed from '../Component/Feed';
import picture1 from '../img/picture1.png';
import picture2 from '../img/picture2.png';
import picture3 from '../img/picture3.png';
import picture4 from '../img/picture4.png';
import picture5 from '../img/picture5.png';
import picture6 from '../img/picture6.png';
import picture7 from '../img/picture7.png';
import picture8 from '../img/picture8.png';
import heart from '../img/heart.png';
import more from '../img/more.png';
import bubble from '../img/speech-bubble.png';
import plane from '../img/paper-plane.png';
import bookmark from '../img/bookmark.png';

class LeftCont extends Component{
  render(){
    return(
      <div className="LeftCont">
        <ul className="storyList">
          <li className="storyName">
            <div className="userName">
              <img src={picture1} alt="프로필" />
              <span>Son</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture2} alt="프로필" />
              <span>Messi</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture3} alt="프로필" />
              <span>Neymar</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture4} alt="프로필" />
              <span>Suarez</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture5} alt="프로필" />
              <span>De Bruyne</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture6} alt="프로필" />
              <span>Grizman</span>
            </div>
          </li>
          <li className="storyName">
            <div className="userName">
              <img src={picture7} alt="프로필" />
              <span>De Yong</span>
            </div>
          </li>
        </ul>
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
        <div className="CommentIcon">
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
        <div className="good">
          <span>younghopark님외 15명이 좋아합니다.</span>
        </div>
        <Feed />
      </div>
    );
  }
}

export default LeftCont;