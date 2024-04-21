import React from 'react';
import AccountLayout from "../../layout/AccountLayout";
import {useAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import {useTab} from "../../context/TabContext";
import models from "../../data/models.json";
import useAuthRedirect from "../../hooks/useAuthRedirect";

export default function SavedModels() {
    const {currentTab} = useTab();
    const {user} = useAuth();

    // 로그인이 되어 있지 않다면 로그인 페이지로 이동
    useAuthRedirect(user)

    return (
        <AccountLayout user={user}>
            <p>저장한 차량이 없습니다.</p>
            <Link className={'btn-primary'} to={`/models/${models[currentTab].name}`}>
                차량 설정
            </Link>
        </AccountLayout>
    );
}