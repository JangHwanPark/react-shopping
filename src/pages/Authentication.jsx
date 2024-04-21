import React from 'react';
import {handleGoogleLogin} from "../utils/fbInstance";
import Input from "../components/Input/Input";
import {Link, useNavigate} from "react-router-dom";
import Button from "../components/Button/Button";

export default function Authentication() {
    // Note: 로그인 성공시 Home 컴포넌트로 redirect
    const navigate = useNavigate();
    const handleLogin = () => {
        handleGoogleLogin();
        navigate('/');
    }

    return (
        <div className={'login_container'}>
            <div className={'login_wrap inner_wrap'}>
                <main className={'main_login flex-center'}>
                    <section className={'section_form flex-center'}>
                        {/* Login Form */}
                        <form className={'form_login flex-column'}>
                            <h2>USE YOUR EMAIL ADDRESS OR PHONE NUMBER</h2>
                            <Input
                                id={'username_input'}
                                divClassName={'flex-column'}
                                className={'primary_input'}
                                title={'아이디'}
                                type="text"
                                placeholder={"아이디를 입력하세요."}
                            />
                            <Input
                                id={'password_input'}
                                divClassName={'flex-column'}
                                className={'primary_input'}
                                title={'비밀번호'}
                                type="text"
                                placeholder={"비밀번호를 입력하세요."}
                            />
                            <button className={'btn-primary'}>로그인</button>
                        </form>

                        {/* Social Login */}
                        <section className={'section_social'}>
                            <h2>CONTINUE WITH A SOCIAL LOGIN</h2>
                            <Button title={'구글 로그인'} className={'btn-primary'} onClick={handleLogin}/>
                        </section>
                    </section>
                    <div className={'help_wrap'}>
                        <Link to={'./login'}>비밀번호를 잊으셨나요?</Link>
                        <Link to={'./login'}>계정 생성</Link>
                        <Link to="/support">문의하기</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}