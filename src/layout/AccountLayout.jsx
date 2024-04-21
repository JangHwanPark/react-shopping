import React from 'react';
import NavigationalTabs from "../components/NavigationalTabs/NavigationalTabs";

export default function AccountLayout({ user, children }) {
    const categories = [
        { name: '마이카', path: `/user/account/${user.displayName}/my-car` },
        { name: '내정보', path: `/user/account/${user.displayName}/my-account` },
        { name: '저장한 모델', path: `/user/account/${user.displayName}/saved-models` }
    ];

    return (
        <div className="pg_container flex-column">
            {/* Categorise */}
            <NavigationalTabs
                title={`MY ACCOUNT\n${user.displayName} 고객님 오늘도 좋은 하루 보내세요!`}
                items={categories}
                className={'category'}
            />

            {/* Middle*/}
            <main className={'main_account'}>
                {children}
            </main>
        </div>
    );
}