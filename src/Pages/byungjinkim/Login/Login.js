import React from 'react';
import {Link} from 'react-router-dom';
import  {LOGIN_API}  from './config';
import './Login.scss';
import '../Styles/Reset.scss';
import '../Styles/Common.scss';


class LoginKim extends React.Component{

  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPw: true,
      productList: [],
    };
  }

  handleInput = (e) => {
    this.setState({
      id: e.target.value,
    })
  }

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    })
  }

  checkValidation = (e) => {
    e.preventDefault();
    const { id, pw } = this.state;

    const checkId = id.includes("@");
    const checkPw = pw.length >= 4;

    if(checkId&&checkPw){
      alert("로그인 성공!");
      // this.state.history.push("/main");
    }
    if(!checkId) {
      alert("@를 포함해주세여!");
    }

    if(!checkPw){
      alert("비밀번호는 4자리 이상이어야 합니다!");
    }
  }

  showPassword = (e) => {
    this.setState({ hiddenPw: {hiddenPw: !this.state.hiddenPw}})
  }
  
  handleButton = (e) => {
    fetch( {LOGIN_API} , {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    }).then((res) => { return res.json()})
      .then(result => { console.log({ result });
    });
  };


    render() {
      //버튼 활성화 조건 변수화
      const {id, pw} = this.state;
      const activeBtn =
      (id.length && pw.length) !==0;

      return (
        <section className="Login">
          <main className="main_westa">
            <article className="art">
              <div className="main_img">
                <img src="./Images/byungjinkim/1.jpg" className="image_ch" alt="이미지1" />
                <img src="./Images/byungjinkim/2.jpg" className="image_ch" alt="이미지2"/>
                <img src="./Images/byungjinkim/3.jpg" className="image_ch" alt="이미지3"/>
                <img src="./Images/byungjinkim/4.jpg" className="image_ch" alt="이미지4"/>
              </div>
              <div className="art login_box">
                <div className="top_box">
                  <div className="logo_insta">Instagram</div>
                  <div className="box_input_space">
                    <form action="#" method="get" className="login_form">
                      <input 
                      id="id"
                      type="text" 
                      className="box_input"  
                      placeholder="전화번호,사용자 이름 또는 이메일"
                      value={id} 
                      //onChange={this.loginInfo}
                      onChange={this.handleInput}
                      />
                        <input 
                        id="pw"
                        type={this.state.hiddenPw ? "password" : "text" } 
                        className="box_input" 
                        placeholder="비밀번호"
                        value={pw}
                        //onChange={this.loginInfo}
                        onChange={this.handlePw}
                        />
                        <span 
                        className="showPw" 
                        onClick={this.showPassword}>
                        {this.state.hiddenPw ? "Show" : "Hide"}
                        </span>
                      <button
                      id="btn_login"
                     // onClick={this.handleButton}
                      onClick={this.checkValidation}
                      className= {activeBtn ? "active" : ""}        
                      >로그인
                      </button>
                    </form>
                    <div className="login_under_box" />
                    <button type="button" id="btn_face">
                      <span className="btn_text">Facebook으로 로그인</span>
                    </button>
                    <a href="#" className="pw_lost">비밀번호를 잊으셨나요?</a>
                  </div> 
                  <div className="middle_box">
                    <div className="register_di">계정이 없으신가요? <span>가입하기</span></div>
                    <div className="under_box">
                      <div className="logo">앱으로 다운로드하세요.</div>
                      <div className="box_space">
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="앱" />
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="앱"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
          <footer className="ft_main">
            <div className="ft_space">
              소재   블로그   채용 정보   도움말   API   개인정보처리방침   약관   인기 계정   해시태크  위치
              <div className="ft_main">
                뷰티 댄스 및 공연 피트니스 식음료 집 및 정원 음악 시각 예술
              </div>
              <div className="ft_main">한국어 2020 instagram from Facebook</div>
            </div>
          </footer>
        </section>
      );
    }
  };

  export default LoginKim;