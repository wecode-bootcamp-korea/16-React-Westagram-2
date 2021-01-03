import React from "react";
import "./Login.scss";

export class LoginLim extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      hiddenPw: true,
    };
  }

  handleLoginInfo = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  showPassword = e => {
    this.setState({ hiddenPw: !this.state.hiddenPw });
  };
  checkValidation = e => {
    e.preventDefault();

    const { id, password } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 4;

    if (checkId && checkPw) {
      alert("로그인 성공!");
      this.props.history.push("/main");
    }
    if (!checkId) {
      alert("아이디는 @를 포함해야 합니다");
    }
    if (!checkPw) {
      alert("비밀번호는 4자리 이상이어야 합니다");
    }
  };

  render() {
    const activateBtn = (this.state.id.length && this.state.password.length) !== 0;

    return (
      <section className="login">
        <div className="login_box">
          <h1 className="logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="instagram logo"></img>
          </h1>
          <form className="login_form">
            <input id="id" className="user_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" value={this.state.id} onChange={this.handleLoginInfo} />
            <div className="pw_wr">
              <input id="password" className="user_pw" type={this.state.hiddenPw ? "password" : "text"} placeholder="비밀번호" value={this.state.password} onChange={this.handleLoginInfo} />
              <span className="show_pw" onClick={this.showPassword}>
                {this.state.hiddenPw ? "Show" : "Hide"}
              </span>
            </div>
            <button className={activateBtn ? "active" : ""} onClick={this.checkValidation} onKeyup={this.checkValidation}>
              로그인
            </button>
          </form>
          <a className="forget_pw" href="https://www.instagram.com/accounts/password/reset">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
    );
  }
}

export default LoginLim;
