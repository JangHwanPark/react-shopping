import React from 'react';
import {useAuth} from "../context/AuthContext";
import {handleGoogleLogin} from "../utils/fbInstance";
import Input from "../components/Input/Input";
import {Link} from "react-router-dom";

export default function Authentication() {
    // Context Data 가져오기
    const {user} = useAuth();

    return (
        <div className={'login_container container'}>
            <div className={'login_wrap inner_wrap'}>
                <main className={'main_login flex-center'}>
                    <section className={'section_form flex-center'}>
                        {/* Login Form */}
                        <form className={'form_login'}>
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
                            <button className={'btn-primary'} onClick={handleGoogleLogin}>
                                구글 로그인
                            </button>
                        </section>
                    </section>
                    <div className={'flex-space-around'}>
                        <Link to={'./login'}>비밀번호를 잊으셨나요?</Link>
                        <Link to={'./login'}>계정 생성</Link>
                        <Link to="/support">문의하기</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}