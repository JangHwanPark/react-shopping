import React from 'react';
import Title from "../components/Title/Title";
import Category from "../components/Category/Category";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import UnorderedList from "../components/UnorderedList/UnorderedList";

// Dummy Data
const vehicleDetails = [
    { key: "대표 차량", value: null }, // 'value'가 'null'인 경우는 단순 제목 표시
    { key: "차량 별명", value: "[별명]" },
    { key: "차량 번호", value: "[번호]" },
    { key: "모델명", value: "[모델]" },
    { key: "차대번호", value: "[차대번호]" },
    { key: "출고 일자", value: "[일자]" },
];

const userInfo = [
    { label: "이름", value: "[이름]" },
    { label: "휴대폰 번호", value: "[번호]" },
    { label: "성별", value: "[성별]" },
    { label: "생일", value: "[생일]" },
    { label: "결혼 유무", value: "[결혼 유무]" },
    { label: "직업", value: "[직업]" },
    { label: "관심", value: "[관심사]" }
];

export default function MyAccount() {
    const {user} = useAuth();
    const navigate = useNavigate();
    if (!user) navigate("/login");

    return (
        <div className="pg_container">
            {/* Top */}
            <Title titleText={'MY ACCOUNT'}/>
            <h2 className={'welcome_member'}>{user.displayName} 고객님<br/>오늘도 좋은 하루 보내세요!</h2>
            {/* Todo: 저장한 모델 네이밀 변경 필요 (어색) - 장바구니같은 역할 */}
            <Category categories={['마이카', '내정보', '저장한 모델']} className={'category'}/>

            {/* Middle*/}
            <main className={'main_account'}>
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
                <SectionLayout title={'사용자 정보'} className={'section_account'}>
                    <UnorderedList className={'account-details'} listItems={userInfo}/>
                </SectionLayout>
            </main>
        </div>
    );
}