import React, {useEffect, useState} from 'react';
import {handleGoogleLogin, handleSignOut, onAuthStateChanged} from '../service/auth';

export default function Authentication() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // 리스너 등록: 사용자 상태 변경 시 사용자 데이터를 업데이트
        const unsubscribe = onAuthStateChanged(user => {
            setUserData(user);
        });

        // 클린업 함수: 컴포넌트 언마운트 시 리스너 해제
        return () => unsubscribe();
    }, []);

    const loginOrLogout = async () => {
        if (userData) await handleSignOut();
        else await handleGoogleLogin();
    };

    return (
        <div>
            <button onClick={loginOrLogout}>
                구글{userData ? '로그아웃' : '로그인'}
            </button>
            <div>{userData ? userData.displayName : "로그인하세요"}</div>
        </div>
    );
}