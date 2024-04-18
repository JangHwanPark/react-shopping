import React from 'react';
import Title from "../components/Title/Title";
import Category from "../components/Category/Category";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import SectionLayout from "../components/SectionLayout/SectionLayout";

export default function MyAccount() {
    const {user} = useAuth();

    const navigate = useNavigate();
    if (!user) navigate("/login");

    return (
        <div className="pg_container">
            {/* Top */}
            <Title titleText={'MY ACCOUNT'}/>
            <h2 className={'welcome_member'}>{user.displayName} 고객님<br/>오늘도 좋은 하루 보내세요!</h2>
            <Category categories={['마이카', '내정보']} className={'category'}/>

            {/* Middle*/}
            <main>
                <SectionLayout title={'사용자 보유 차량'}>
                    <dl>
                        <dt>대표 차량:</dt>
                        <dd>차량 번호: [번호]</dd>
                        <dd>차량 별명: [별명]</dd>
                        <dd>모델명: [모델]</dd>
                        <dd>차대번호: [차대번호]</dd>
                        <dd>출고 일자: [일자]</dd>
                    </dl>
                </SectionLayout>
                <SectionLayout title={'최근 정비 내역'}>
                    <address>
                        서비스 센터명: [센터명]<br/>
                        담당 SA: [SA명]<br/>
                        전화: [전화번호]<br/>
                        위치: [위치]
                    </address>
                </SectionLayout>
                <SectionLayout title={'사용자 정보'}>
                    <dl>
                        <dt>이름:</dt>
                        <dd>[이름]</dd>
                        <dt>휴대폰 번호:</dt>
                        <dd>[번호]</dd>
                        <dt>성별:</dt>
                        <dd>[성별]</dd>
                        <dt>생일:</dt>
                        <dd>[생일]</dd>
                        <dt>결혼 유무:</dt>
                        <dd>[결혼 유무]</dd>
                        <dt>직업:</dt>
                        <dd>[직업]</dd>
                        <dt>관심:</dt>
                        <dd>[관심사]</dd>
                    </dl>
                </SectionLayout>
            </main>
        </div>
    );
}