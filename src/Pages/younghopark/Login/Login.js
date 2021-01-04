import './Login.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class LoginPark extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      hiddenPw: true,
      productList: [],
    };
  }

  // handleIdChange = (e) =>{
  //   this.setState({id : e.target.value});
  // };
  
  // handlePasswordChange = (e) =>{
  //   this.setState({password : e.target.value});
  // };

  //아이디 비밀번호 저장
  handleLoginInfo = (e) =>{
    //계산된 속성명 비구조화
    const {id, value} = e.target;
    //e.target.id ==> input 태그안에 있는 아이디값
    this.setState({ [id] : value });
  };

  //비밀번호 보여주거나 가리기
  showPassword = (e) => {
    this.setState({ hiddenPw : !this.state.hiddenPw });
  };

  //로그인 조건
  checkValidation = (e) => {
    e.preventDefault();
    //구조분해 할당 = 비구조화
    const {id, password} = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 4;

    if(checkId && checkPw){
      alert("로그인 성공");
      this.props.history.push("/main-park")
    }
    if(!checkId){
      alert("아이디는 @를 포함해야 합니다.")
    }
    if(!checkPw){
      alert("비밀번호는 4자리 이상이어야 합니다.")
    }
  };

  render() {
    const activateBtn =
     (this.state.id.length && this.state.password.length)  != 0;
  
    console.log("id", this.state.id, "pw", this.state.password);
    return (
      <div className="Login">
        <div className ="container">
          <div className="logo">
            <h1>Westargram</h1>
          </div>
          <div className="idForm">
            <input 
              id="id" 
              className="userId" 
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"  
              value={this.state.id}
              onChange={this.handleLoginInfo}
            />
          </div>
          <div className="pwForm">
            <input 
              id="password"
              className="userPw" 
              type={this.state.hiddenPw ? "password" : "text" }
              placeholder="비밀번호"
              value={this.state.password}
              onChange={this.handleLoginInfo}
            />
            <span className ="showPw" onClick={this.showPassword}>
              {this.state.hiddenPw ? "Show" : "Hide"}
            </span>
          </div>
          <button 
            id="loginBtn"
            onClick={this.checkValidation}
            className ={activateBtn ? "active" : ""}>
            로그인
          </button>
          <div className="forgetBtn">
            <a className="forgetPw">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );  
  }
}

export default LoginPark;

