import React from 'react';
import Title from "../components/Title/Title";
import Category from "../components/Category/Category";

export default function AccountLayout({ user, children }) {
    const categories = [
        { name: '마이카', path: `/user/account/${user.displayName}/my-car` },
        { name: '내정보', path: `/user/account/${user.displayName}/my-account` },
        { name: '저장한 모델', path: `/user/account/${user.displayName}/saved-models` }
    ];

    return (
        <div className="pg_container">
            {/* Top */}
            <Title titleText={'MY ACCOUNT'}/>
            {/* Todo: MY ACCOUNT 하단에 배치 (h2) */}
            <h2 className={'welcome_member'}>{user.displayName} 고객님 오늘도 좋은 하루 보내세요!</h2>
            {/* Todo: 저장한 모델 네이밀 변경 필요 (어색) - 장바구니같은 역할 */}
            <Category categories={categories} className={'category'}/>

            {/* Middle*/}
            <main className={'main_account'}>
                {children}
            </main>
        </div>
    );
}