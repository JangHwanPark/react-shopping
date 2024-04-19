import React from 'react';
import {useAuth} from "../context/AuthContext";
import {handleGoogleLogin, handleSignOut} from "../utils/fbInstance";
import Input from "../components/Input/Input";
import {Link} from "react-router-dom";

export default function Authentication() {
    // Context Data 가져오기
    const {user} = useAuth();

    return (
        <div className={'container'}>
            <div className={'login_wrap inner_wrap'}>
                <main className={'main_login'}>
                    <div className={'flex-center'}>
                        <form className={'form_login'}>
                            <Input
                                id={'name_input'}
                                divClassName={'flex-column text_wrap'}
                                className={'primary_input input_info'}
                                title={'아이디'}
                                type="text"
                                placeholder={"아이디를 입력하세요."}
                            />
                            <Input
                                id={'name_input'}
                                divClassName={'flex-column text_wrap'}
                                className={'primary_input input_info'}
                                title={'비밀번호'}
                                type="text"
                                placeholder={"비밀번호를 입력하세요."}
                            />
                            <button className={'btn-primary'}>
                                로그인
                            </button>
                        </form>
                        <section className={'section_login'}>
                            <button className={'btn-primary'} onClick={handleGoogleLogin}>
                                구글 로그인
                            </button>
                        </section>
                    </div>
                    <div className={'flex-center'}>
                        <Link to={'./login'}>비밀번호를 잊으셨나요?</Link>
                        <Link to={'./login'}>계정 생성</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}