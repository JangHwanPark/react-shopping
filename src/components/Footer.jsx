import React from 'react';
import styles from './Footer.module.css';
import {models, service} from '../data';
import {Link} from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner_wrap}>
                <div>
                    <h3>모델</h3>
                    <ul>
                        {models.map(({id, href, label}) => (
                            <li key={id}><Link to={href}>{label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>서비스</h3>
                    <ul>
                        {service.map(({id, href, label}) => (
                            <li key={id}><Link to={href}>{label}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                긴급출동 서비스 080-4300-4300 (ARS 1번 /24시간 연중무휴)
                렉서스 서비스 예약 080-4500-4500 (24시간 연중무휴)
                고객 지원실 080-4300-4300 (평일 09:00-18:00)
                개인정보 처리방침
                법적고지
                ⓒ TOYOTA MOTOR KOREA
            </div>
        </footer>
    );
}