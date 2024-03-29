// import {createContext, useContext, useEffect, useState} from "react";
// import {onUserStateChanged} from "../service/fbInstance";
//
// // ContextAPI 생성
// const AuthContext = createContext();
//
// // ContextAPI Hook 생성
// export const useAuth = () => useContext(AuthContext);
//
// export const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//
//     useEffect(() => {
//         // 리스너 등록: 사용자 상태 변경 시 사용자 데이터를 업데이트
//         const unsubscribe = onUserStateChanged(setUser);
//
//         // 클린업 함수: 컴포넌트 언마운트 시 리스너 해제
//         return () => unsubscribe();
//     }, []);
//
//     const value = {user};
//
//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }