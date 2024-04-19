import React from 'react';
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AccountLayout from "../../layout/AccountLayout";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import {vehicleDetails} from "../../data/my_account.js";

export default function MyCar() {
    const {user} = useAuth();
    const navigate = useNavigate();
    if (!user) navigate("/login");

    return (
        <AccountLayout user={user}>
            <SectionLayout title={'사용자 보유 차량'} className={'section_account'}>
                <UnorderedList className={'account-details'} listItems={vehicleDetails}/>
            </SectionLayout>
            <SectionLayout title={'최근 정비 내역'} className={'section_account'}>
                <address>
                    서비스 센터명: [센터명]<br/>
                    담당 SA: [SA명]<br/>
                    전화: [전화번호]<br/>
                    위치: [위치]
                </address>
            </SectionLayout>
        </AccountLayout>
    );
}