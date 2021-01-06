import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../data/config';
import '../../../Styles/yoojaehyun/Reset.scss';
import '../Login/Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            password: '',
            hiddenPw: true,
        };
    }

    handleLoginInfo = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };
    showPassword = () => {
        this.setState({ hiddenPw: !this.state.hiddenPw });
    };
    checkValidation = (event) => {
        event.preventDefault();
        // const { userId, password } = this.state;
        // const checkId = userId.includes('@');
        // const checkPw = password.length >= 4;

        // if (!checkId) {
        //     alert('아이디는 @를 포함해야 합니다.');
        // }
        // if (!checkPw) {
        //     alert('비밀번호는 4자리 이상이여야 합니다.');
        // }
        // if (checkId && checkPw) {
        //     alert('로그인 성공!');
        //     this.props.history.push('/main');
        // }
    };
    handleButton = () => {
        fetch(`${API}`, {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.userId,
                password: this.state.password,
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log(result));
    };

    render() {
        const activeBtn =
            (this.state.userId.length && this.state.password.length) > 3;
        return (
            <div className='Login'>
                <div className='login__wrap'>
                    <header>
                        <h1 className='title'>Westagram</h1>
                    </header>
                    <form className='form__wrap'>
                        <input
                            id='userId'
                            type='text'
                            placeholder='휴대폰번호,이메일.. '
                            value={this.state.userId}
                            onChange={this.handleLoginInfo}
                        />
                        <div className='password__wrap'>
                            <input
                                id='password'
                                placeholder='비밀번호를 입력해 주세요.'
                                type={this.state.hiddenPw ? 'password' : 'text'}
                                value={this.state.password}
                                onChange={this.handleLoginInfo}
                            />
                            <span
                                className='showHide'
                                onClick={this.showPassword}>
                                {this.state.hiddenPw ? 'Show' : 'Hide'}
                            </span>
                        </div>
                        <button
                            type='button'
                            onClick={this.checkValidation}
                            onKeyUp={this.checkValidation}
                            className={`on__Submit  ${
                                activeBtn ? 'active' : ''
                            }`}>
                            로그인
                        </button>
                        <hr />
                    </form>
                    <Link to='/' className='find__password'>
                        비밀번호를 잊으셨나요?
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;
