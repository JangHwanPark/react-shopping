import {createContext, useContext, useEffect, useState} from "react";
import {handleGoogleLogin, handleSignOut, onAuthStateChanged} from "../service/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 리스너 등록: 사용자 상태 변경 시 사용자 데이터를 업데이트
        const unsubscribe = onAuthStateChanged(setUser);

        // 클린업 함수: 컴포넌트 언마운트 시 리스너 해제
        return () => unsubscribe();
    }, []);

    // 구글 로그인 함수
    const signIn = async () => {
        await handleGoogleLogin();
    };

    // 로그 아웃 함수
    const signOut = async () => {
        await handleSignOut();
    }

    const value = {user, signIn, signOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}