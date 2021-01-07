import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
        <nav className="nav_main" style={{backgroundColor: 'white'}}>
        <div className="nav_main nav_li">
          <img src="./Images/byungjinkim/logo.png" alt="로고1" />
          <div className="input_search">
            <input type="text" defaultValue="검색" />
          </div>
          <div className="nav_right_image">
            <img src="./Images/byungjinkim/home.png" alt="홈 이미지"/>
            <img src="./Images/byungjinkim/airplane.png" alt="비행기 이미지"/>
            <img src="./Images/byungjinkim/explore.png" alt="explore 이미지"/>
            <img src="./Images/byungjinkim/emptyheart.png" alt="빈 하트 이미지"/>
            <img src="./Images/byungjinkim/my.jpg" style={{borderRadius: '10px'}} alt="내 사진"/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;