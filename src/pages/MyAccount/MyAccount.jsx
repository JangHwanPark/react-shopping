import React from 'react';
import Title from "../../components/Title/Title";
import Category from "../../components/Category/Category";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import AccountLayout from "../../layout/AccountLayout";
import {userInfo, vehicleDetails} from "../../data/my_account.js";

export default function MyAccount() {
    const {user} = useAuth();
    const navigate = useNavigate();
    if (!user) navigate("/login");

    return (
        <AccountLayout user={user}>
            <SectionLayout title={'사용자 정보'} className={'section_account'}>
                <UnorderedList className={'account-details'} listItems={userInfo}/>
            </SectionLayout>
        </AccountLayout>
    );
}