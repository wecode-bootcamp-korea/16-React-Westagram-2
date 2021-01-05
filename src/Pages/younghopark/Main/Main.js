import './Main.scss';
import '../../../Styles/Reset.scss';
import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import RightFeed from '../Component/RightFeed';
import LeftFeed from '../Component/LeftFeed';

class MainPark extends Component {
  render() {
    return (
      <div class="main">
        <div class="header">
          <Navbar />
        </div>
        <div className="LeftCont">
          <LeftFeed />
        </div>
        <div className="rightCont">
          <RightFeed />
        </div>
      </div>
    );
  }
}
export default MainPark;