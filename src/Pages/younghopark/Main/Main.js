import './Main.scss';
import '../../../Styles/Reset.scss';
import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import RightFeed from '../Component/RightFeed';
import LeftCont from '../Component/LeftCont';

class MainPark extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <Navbar />
        </div>  
          <LeftCont />
        <div className="rightCont">
          <RightFeed />
        </div>
      </div>
    );
  }
}
export default MainPark;