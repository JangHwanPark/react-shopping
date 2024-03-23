import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID,
}

// 파이어 베이스 초기화(app : Firebase 앱 인스턴스)
const app = initializeApp(firebaseConfig);

// 자동으로 사용자 세션, 활동유형, 앱 구매등 이벤트 추적(필수 아님)
const analytics = getAnalytics(app);

// 로그인 기능구현을 위한 Auth 초기화
const auth = getAuth();

export { app, auth };