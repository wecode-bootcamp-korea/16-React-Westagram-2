import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import users from '../Images/user.png';
import picture2 from '../Images/picture2.png';
import picture3 from '../Images/picture3.png';
import picture4 from '../Images/picture4.png';
import picture5 from '../Images/picture5.png';
import '../Main/Main.scss';

const USER_PROFILE =[
  {id:0, UserProfile:picture2, UserName:'Leo Messi', Follow: 'Follows You', Link:'팔로우'},
  {id:0, UserProfile:picture3, UserName:'Neymar JR', Follow: 'Follows You', Link:'팔로우'},
  {id:0, UserProfile:picture4, UserName:'Luis Suarez', Follow: 'Leo Messi님 외 2명이 팔로우 합니다.', Link:'팔로우'},
  {id:0, UserProfile:picture5, UserName:'Kevin De Bruyne', Follow: '회원님을 위한 추천', Link:'팔로우'},
];

const FOOTER = [
  {id:0, Menu:'소개'},
  {id:1, Menu:'도움말'},
  {id:2, Menu:'홍보 센터'},
  {id:3, Menu:'API'},
  {id:4, Menu:'채용 정보'},
  {id:5, Menu:'개인정보처리방침'},
  {id:6, Menu:'약관'},
  {id:7, Menu:'위치'},
  {id:8, Menu:'인기 계정'},
  {id:9, Menu:'해시태그'},
  {id:10, Menu:'언어'},
];

class RightFeed extends Component{
  render() {
    return(
      <div className="RightCont">
        <div className="Myprofile">
          <div className="yourProfile">
            <img src={users} alt="내프로필" />
            <div className="MyprofileId">
              <span>qkrdudgh1701</span>
              <span>박영호</span>
            </div>
          </div>
          <div className="Change">
            <Link to="./"><span>전환</span></Link>
          </div>
        </div>
        {USER_PROFILE.map((el) =>{
          return(
            <div className="userprofile">
              <div className="userPro">
                <img src={el.UserProfile} alt="상대프로필" />
                <div className="userprofileId">
                  <Link to="./"><span>{el.UserName}</span></Link>
                  <span>{el.Follow}</span>
                </div>
              </div>
              <div className="Followed">
                <Link to="./"><span>{el.Link}</span></Link>
              </div>
            </div>
          )
        })}
        {FOOTER.map((el, index) =>{
          return(
            <div className="other_box" key={index}>
              <ul className="other">
                <li className="otherSpan">{el.Menu} ∙</li>
              </ul>
            </div>
          );
        })} 
        <div className="InstarFace">
          <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    )
  }
}

export default RightFeed;