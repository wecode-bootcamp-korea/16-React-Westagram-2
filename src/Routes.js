import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPark from './Pages/younghopark/Login/Login';
import MainPark from './Pages/younghopark/Main/Main';

// 임진영 컴포넌트
import { LoginLim } from './Pages/jinyounglim/Login/Login';
import { MainLim } from './Pages/jinyounglim/Main/Main';

// 유재현 컴포넌트
import { LoginYoo } from './Pages/yoojaehyun/Login/Login';
import { MainYoo } from './Pages/yoojaehyun/Main/Main';

// 김병진 컴포넌트
import { LoginKim } from './Pages/byungjinkim/Login/Login';
import { MainKim } from './Pages/byungjinkim/Main/Main';



// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login-park' component={LoginPark} />
          <Route exact path='/main-park' component={MainPark} />
            
          <Route exact path='/login-Lim' component={LoginLim} />
          <Route exact path='/main-Lim' component={MainLim} />
            
          <Route exact path='/login-yoo' component={LoginYoo} />
          <Route exact path='/main-yoo' component={MainYoo} />
            
          <Route exact path='/login-kim' component={LoginKim} />
          <Route exact path='/main-kim' component={MainKim} /> 
        </Switch>
      </Router>
      )
    }
  }
  
  export default Routes;