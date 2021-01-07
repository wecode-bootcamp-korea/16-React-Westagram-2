import React, { Component } from 'react';
import '../Main/Main.scss';
import home from '../Images/home.png';
import heart from '../Images/heart.png';
import users from '../Images/user.png';

class Navbar extends Component{
  render() {
    return(
      <div className="Navbar">
        <div className="WestarLogo">
          <h1>Westargram</h1>
        </div>
        <div className="searchBox">
          <input type="text" />
          <i id="SearchIcon" className="fas fa-search" />
          <span className="search">검색</span>
        </div>
        <div className="NavIcon">
          <img src={home} alt="홈아이콘" className="Icon" />
          <img src={heart} alt="하트아이콘" className="Icon" />
          <img src={users} alt="유저아이콘" className="Icon" />
        </div> 
      </div>
    )
  }
}

export default Navbar;