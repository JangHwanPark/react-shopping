import React from 'react';
import Title from "../components/Title/Title";

export default function MyAccount() {
    return (
        <main className="pg_main">
            <Title titleText={'MY ACCOUNT'} />
            <section>
                사용자 보유 차량
                최근 정비 내역
            </section>
            <section>
                사용자 정보
            </section>
        </main>
    );
}