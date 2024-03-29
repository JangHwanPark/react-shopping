import React, {useEffect, useState} from 'react';
import {handleGoogleLogin, handleSignOut, onAuthStateChanged} from '../service/auth';
import {useAuth} from "../context/AuthContext";

export default function Authentication() {
    // Context Data 가져오기
    const {user, signIn, signOut} = useAuth();

    // 사용자가 버튼을 클릭했을 때 실행할 함수
    const handleAuthAction = () => {
        if (user) signOut();
        else signIn();
    };

    return (
        <div>
            <button onClick={handleAuthAction}>
                구글{user ? '로그아웃' : '로그인'}
            </button>
            <div>{user ? user.displayName : "로그인하세요"}</div>
        </div>
    );
}