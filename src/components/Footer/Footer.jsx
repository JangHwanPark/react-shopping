import React from 'react';

export default function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'inner_footer'}>
                <section className={'section_service'}>
                    <div>긴급출동 서비스 080-4300-4300 (ARS 1번 /24시간 연중무휴)</div>
                    <div>렉서스 서비스 예약 080-4500-4500 (24시간 연중무휴)</div>
                    <div>고객 지원실 080-4300-4300 (평일 09:00-18:00)</div>
                </section>
                <section className={'section_relation'}>
                    <span>개인정보 처리방침</span>
                    <span>법적고지</span>
                    <small>ⓒ TOYOTA MOTOR KOREA</small>
                </section>
            </div>
        </footer>
    );
}