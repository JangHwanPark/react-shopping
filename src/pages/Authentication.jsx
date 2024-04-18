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
                        <section>
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
                        </section>
                        <section>
                            <button onClick={handleGoogleLogin}>
                                구글 로그인
                            </button>
                            <button onClick={handleSignOut}>
                                구글 로그아웃
                            </button>
                        </section>
                    </div>
                    <div>
                        <Link to={'./login'}>비밀번호를 잊으셨나요?</Link>
                        <Link to={'./login'}>계정 생성</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}