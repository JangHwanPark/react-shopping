import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth} from './fbInstance';

// 소셜 로그인(구글) 함수
export const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const data = await signInWithPopup(auth, provider);

        // 로그인한 사용자 정보
        const user = data.user;
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }
}

// 로그아웃 함수
export const handleSignOut = async () => {
    try {
        await signOut(auth);
        console.log('로그아웃')
    } catch (error) {
        console.error('error : ', error)
    }
}

// 사용자 상태 변경(Session 상태 변경)시 호출될 콜백 함수를 매개변수로 받는 함수
export const onAuthStateChanged = (callback) => {
    return auth.onAuthStateChanged(user => {
        callback(user);
    })
}