import React from 'react';
import {useAuth} from "../context/AuthContext";
import {handleGoogleLogin, handleSignOut} from "../utils/fbInstance";

export default function Authentication() {
    // Context Data 가져오기
    const {user} = useAuth();

    return (
        <div>
            <button onClick={handleGoogleLogin}>
                구글 로그인
            </button>
            <button onClick={handleSignOut}>
                구글 로그아웃
            </button>
            <div>{user ? user.displayName : "로그인하세요"}</div>
        </div>
    );
}