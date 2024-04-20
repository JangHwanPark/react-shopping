import React, {useEffect} from 'react';
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import AccountLayout from "../../layout/AccountLayout";

export default function MyAccount() {
    const {user} = useAuth();
    const navigate = useNavigate();

    // 로그인이 되어 있지 않다면 로그인 페이지로 이동
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    // 필요한 사용자 정보만 추출
    const userDetails = user ? {
        '이름': user.displayName,
        '이메일': user.email,
        '휴대폰 번호': user.phoneNumber || '전화번호 없음' // 전화번호가 없는 경우 대체 텍스트
    } : {};

    // userDetails를 배열로 변환 (UnorderedList 컴포넌트가 배열만 받음)
    const userDetailsArray = Object.entries(userDetails).map(([key, value]) => ({ key, value }));

    return (
        <AccountLayout user={user}>
            <SectionLayout title={'사용자 정보'} className={'section_account'}>
                <UnorderedList
                    className={'account-details'}
                    listItems={userDetailsArray}
                />
            </SectionLayout>
        </AccountLayout>
    );
}