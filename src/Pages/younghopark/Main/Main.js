import './Main.scss';
import '../../../Styles/Reset.scss';
import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import RightCont from '../Component/RightCont';
import LeftCont from '../Component/LeftCont';

class MainPark extends Component {
  render() {
    return (
      <div className="main">
          <Navbar />
          <LeftCont />
          <RightCont />
      </div>
    );
  }
}
export default MainPark;