import React, { Component } from 'react';
import '../Main/Main.scss';
import Feed from '../Component/Feed';
import picture1 from '../Images/picture1.png';
import picture2 from '../Images/picture2.png';
import picture3 from '../Images/picture3.png';
import picture4 from '../Images/picture4.png';
import picture5 from '../Images/picture5.png';
import picture6 from '../Images/picture6.png';
import picture7 from '../Images/picture7.png';
import picture8 from '../Images/picture8.png';
import heart from '../Images/heart.png';
import more from '../Images/more.png';
import bubble from '../Images/speech-bubble.png';
import plane from '../Images/paper-plane.png';
import bookmark from '../Images/bookmark.png';

const PROFILE = [
  { id: 0, ProfileImg: picture1, name: "son"},
  { id: 1, ProfileImg: picture2, name: "Messi"},
  { id: 2, ProfileImg: picture3, name: "Neymar"},
  { id: 3, ProfileImg: picture4, name: "Suarez"},
  { id: 4, ProfileImg: picture5, name: "De Bruyne"},
  { id: 5, ProfileImg: picture6, name: "Grizman"},
  { id: 6, ProfileImg: picture7, name: "De Yong"},
];

class LeftCont extends Component{
  render(){
    return(
      <div className="LeftCont">
        <ul className="storyList">
          {PROFILE.map((element)=>{
            return(
              <li className="storyName">
                <img src={element.ProfileImg} alt="프로필" />
                <span>{element.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="FeedBar">
          <div className="FeedImage">
            <img src={picture1} alt="프로필" />
            <span>Son</span>
          </div>
          <div className="More">
            <img src={more} alt="더보기" />
          </div>
        </div>
        <div className="MainImage">
          <img src={picture8} alt="메인이미지" />
        </div>
        <div className="CommentIcon">
          <div className="StateIcon">
            <img src={heart} alt="좋아요" />
            <img src={bubble} alt="말풍선" />
            <img src={plane} alt="공유" />
          </div>
          <img src={bookmark} alt="북마크" />
        </div>
        <div className="Like">
          <span>younghopark님외 15명이 좋아합니다.</span>
        </div>
        <Feed />
      </div>
    );
  }
}

export default LeftCont;