import React, { Component } from 'react';
import { SIGNUP_API, SIGNIN_API } from "../Component/Config";
import './Login.scss';

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

    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("token", result.Authorization);
        
        if(result.message ==="SUCCESS"){
          alert("로그인성공")
          this.props.history.push("/main-park");
          return;
        }

        if(result.message !== "SUCCESS"){
          alert("로그인실패");
        }
      
      });
  };

  //회원가입 조건
  checkSignup = (e) =>{
    e.preventDefault();

    const {id, password} = this.state;
    const checkPw = password.length >= 5;

    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if(result.message === "SUCCESS"){
          alert("회원가입 성공");
        }
        if(result.message === "INVALID_EMAIL"){
          alert("이메일 형식이 잘못되었습니다.")
        }
        if(!checkPw){
          alert("비밀번호는 5자리 이상이어야 합니다.")
        }
      });
  }

  render() {
    const { id, password, hiddenPw} = this.state;
    
    const activateBtn =
     (id.length && password.length)  !== 0;

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
              value={id}
              onChange={this.handleLoginInfo}
            />
          </div>
          <div className="pwForm">
            <input 
              id="password"
              className="userPw" 
              type={hiddenPw ? "password" : "text" }
              placeholder="비밀번호"
              value={password}
              onChange={this.handleLoginInfo}
            />
            <span className ="showPw" onClick={this.showPassword}>
              {hiddenPw ? "Show" : "Hide"}
            </span>
          </div>
          <div className="LoginSignupBtn">
            <button 
              id="loginBtn"
              onClick={this.checkValidation}
              className ={activateBtn ? "active" : ""}>
              로그인
            </button>
            <button 
              id="SiginupBtn"
              onClick={this.checkSignup}
              className="Signup">
              회원가입
            </button>
          </div>
          <div className="forgetBtn">
            <span className="forgetPw">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </div>
    );  
  }
}

export default LoginPark;

