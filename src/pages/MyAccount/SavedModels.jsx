import React from 'react';
import AccountLayout from "../../layout/AccountLayout";
import {useAuth} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {useTab} from "../../context/TabContext";
import models from "../../data/models.json";

export default function SavedModels() {
    const {currentTab} = useTab();
    const {user} = useAuth();
    const navigate = useNavigate();
    if (!user) navigate("/login");

    return (
        <AccountLayout user={user}>
            <p>저장한 차량이 없습니다.</p>
            <Link className={'btn-primary'} to={`/models/${models[currentTab].name}`}>
                차량 설정
            </Link>
        </AccountLayout>
    );
}