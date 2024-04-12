import React from 'react';
import styles from './Footer.module.css';
import models from '../../data/models.json';
import FooterItem from "./FooterItem";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner_wrap}>
                <div className={`${styles.footer_top} ${styles.flex}`}>
                    <section className={styles.relation}>
                        <div>긴급출동 서비스 080-4300-4300 (ARS 1번 /24시간 연중무휴)</div>
                        <div>렉서스 서비스 예약 080-4500-4500 (24시간 연중무휴)</div>
                        <div>고객 지원실 080-4300-4300 (평일 09:00-18:00)</div>
                    </section>
                    <section className={`${styles.service} ${styles.flex}`}>
                        <FooterItem title={'모델'} items={models}/>
                    </section>
                </div>
                <div>
                    <span>개인정보 처리방침</span>
                    <span>법적고지</span>
                    <small>ⓒ TOYOTA MOTOR KOREA</small>
                </div>
            </div>
        </footer>
    );
}