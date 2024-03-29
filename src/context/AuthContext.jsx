import {createContext, useContext, useEffect, useState} from "react";
import {onUserStateChanged} from "../service/fbInstance";

// ContextAPI 생성
const AuthContext = createContext();

// ContextAPI 를 쉽게 쓰려고 만든 커스텀 훅
export const useAuth = () => useContext(AuthContext);

// 인증 상태 관리 및 파이어베이스 인증 상태 변경 리스너를 등록하는 컴포넌트
// 모든 자식 컴포넌트가 인증상태를 공유함.
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // 컴포넌트 마운트시 인증상태 변경 리스너 등록
    // setUser 함수는 인증 상태가 변경될 때 호출되어, user 상태를 업데이트함.
    useEffect(() => {
        // 리스너 등록: 사용자 상태 변경 시 사용자 데이터를 업데이트
        // onUserStateChanged 함수는 인증 상태가 변경될때마다 setUser 함수를 호출
        const unsubscribe = onUserStateChanged(setUser);

        // 클린업 함수: 컴포넌트 언마운트 시 리스너 해제 (불필요한 리스너 호출 및 메모리 누수 방지)
        return () => unsubscribe();
    }, []);

    // 컨텍스트 프로바이더를 통해 자식 컴포넌트에게 user 객체를 전달
    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}