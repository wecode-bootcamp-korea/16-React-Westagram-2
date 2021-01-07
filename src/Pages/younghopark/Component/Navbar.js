import React, { Component } from 'react';
import '../Main/Main.scss';
import home from '../img/home.png';
import heart from '../img/heart.png';
import users from '../img/user.png';

class Navbar extends Component{
  render() {
    return(
      <div className="Navbar">
        <div className="instar">
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
    )
  }
}

export default Navbar;