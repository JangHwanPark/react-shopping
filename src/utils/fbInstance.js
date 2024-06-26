import { initializeApp } from 'firebase/app';

// 로그인 연동
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';

// 데이터베이스 연동
import {getDatabase, get, child, ref, set} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID,
}

// 파이어 베이스 초기화(app : Firebase 앱 인스턴스)
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

// 소셜 로그인(구글)
export const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).catch(console.error);
}

// 로그아웃
export const handleSignOut = () => {
    signOut(auth).catch(console.error);
    console.log('로그아웃');
}

// 사용자 상태 변경(Session 상태 변경)시 호출될 콜백 함수를 매개변수로 받는 함수
export const onUserStateChanged = (callback) => {
    return onAuthStateChanged(auth, async (user) => {
        // 사용자 상태 변화
        // 1. 세션이 존재하는 경우 (로그인한 경우)
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

const adminUser = async (user) => {
    // 2. 사용자과 관리자 권한을 가지고 있는지 확인
    // 3. return {...user, isAdmin: true / false}
    return get(ref(database, 'admins'))
        .then((snapshot) => {
            // 스냅샷이 존재한다면 snapshot.val 를 이용해 값을 읽어옴
            if (snapshot.exists()) {
                const admin = snapshot.val();
                //console.log('admins : ', admin);
                const isAdmin = admin.includes(user.uid);
                //console.log('isAdmin : ' , isAdmin);
                return {...user, isAdmin };
            }
        })
}

/**
 * Firebase 데이터베이스에 데이터를 저장하는 범용 함수
 * @param {Object} data - 저장할 데이터
 * @param {string} path - 데이터베이스 내 저장할 경로
 */
export const saveData = async (data, path) => {
    const database = getDatabase(app); // 데이터베이스 인스턴스 생성

    try {
        const dataRef = ref(database, path); // 데이터 저장 경로 설정
        await set(dataRef, data);
        console.log('Data saved at path:', path, 'Data:', data);
    } catch (error) {
        console.error('Error saving data at path:', path, ':', error);
        throw error; // 에러를 다시 throw하여 호출자에게 에러 정보를 전달
    }
};