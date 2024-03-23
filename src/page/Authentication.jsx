import React, {useState} from 'react';
import {auth} from '../service/fbInstance';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export default function Authentication(props) {
    const [userData, setUserData] = useState(null);

    // 구글 로그인 핸들러 함수
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider) // 팝업을 이용해 회원가입
            .then(data => {
                setUserData(data.user); // 유저 데이터 설정
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>구글</button>
            <div>{userData ? userData.displayName : "로그인하세요"}</div>
        </div>
    );
}