import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

// 로그인이 되어 있지 않다면 로그인 페이지로 이동시키는 커스텀 훅
export default function useAuthRedirect(user) {
    const navigate = useNavigate();
    // DebugLog
    console.log('useAuthRedirect : ', user)

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);
}