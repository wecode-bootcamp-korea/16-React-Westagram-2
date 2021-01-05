import React from 'react';
import {Link} from 'react-router-dom';
import '../../../Styles/byungjinkim/Reset.scss'



class LoginKim extends React.Component{
  constructor() {
    super();
    this.state = {
      id_input: "",
      pw_input: "",
      hiddenPw: true,
      productList: [],
    };
  }

  //로그인 id
 /* idChange = (e) => {
    this.setState({
      id : e.target.value
    });
  }

  //로그인 pw
 pwChange = (e) => {
    this.setState({
      pw : e.target.value
    });
  }*/
  
  //로그인 id,pw 합치기
  loginInfo = (e) => {
    const { id, value} = e.target; 
    this.setState({ [id]: value});
  };

  //pw 숨기고 보여주기
  showPassword = (e) => {
    this.setState({ hiddenPw: !this.state.hiddenPw});
  }

  //로그인 버튼 활성화

  checkValidation = (e) => {
     e.preventDefault();
    // 구조분해 할당
    const {id_input, pw_input} = this.state;

    // 조건을 변수화
    const checkId = id_input.includes("@");
    const checkPw = pw_input.length >= 4;

    if(checkId && checkPw) {
      alert("로그인 성공!");
      // 로그인이 성공하면 main페이지로 이동해라 ~
      this.state.history.push("/main");
    }

    if(!checkId){
      alert("ID는 @가 포함되어야 합니다.");
    }

    if(!checkPw){
      alert("비밀번호는 4자리 이상이어야 합니다.");
    }

  };
    render() {

      // 버튼 활성화 조건 변수화
      const activeBtn =
      (this.state.id_input.length && this.state.pw_input.length) !=0;
     
      
      return (
        <section className="Login">
          <main className="main_westa">
            <article className="art">
              <div className="main_img">
                <img src="../image/1.jpg" className="image_ch" alt="이미지1" />
                <img src="../image/2.jpg" className="image_ch" alt="이미지2"/>
                <img src="../image/3.jpg" className="image_ch" alt="이미지3"/>
                <img src="../image/4.jpg" className="image_ch" alt="이미지4"/>
              </div>
              <div className="art login_box">
                <div className="login_box top_box">
                  <div className="logo_insta">Instagram</div>
                  <div className="box_input_space">
                    <form action="#" method="get" className="login_form">
                      <input 
                      id="id_input"
                      type="text" 
                      className="box_input"  
                      placeholder="전화번호,사용자 이름 또는 이메일"
                      value={this.state.id} 
                      onChange={this.loginInfo}
                      />
                      
                        <input 
                        id="pw_input"
                        type={this.state.hiddenPw ? "password" : "text" } 
                        className="box_input" 
                        placeholder="비밀번호"
                        value={this.state.pw}
                        onChange={this.loginInfo}
                        />
                        <span className="showPw" onClick={this.showPassword}>
                          {this.state.hiddenPw ? "Show" : "Hide"}</span>
                      <button
                      id="btn_login"
                      onClick={this.checkValidation}
                      className= {activeBtn ? "active" : ""}        
                      >로그인
                      </button>
                    </form>
                    <div className="login_under_box" />
                    <button type="button" id="btn_face">
                      <Link><span className="btn_text">Facebook으로 로그인</span></Link>
                    </button>
                    <Link className="pw_lost">비밀번호를 잊으셨나요?</Link>
                  </div> 
                  <div className=" top_box middle_box">
                    <div className="register_di">계정이 없으신가요? <Link>가입하기</Link></div>
                    <div className="login_box under_box">
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