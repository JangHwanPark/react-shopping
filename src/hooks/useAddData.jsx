import { useState } from 'react';
import { saveData } from '../utils/fbInstance';

// 제품 추가 기능을 위한 커스텀 훅
function useAddData() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 제품 추가 함수
    const handleAddData = async (data, path) => {
        setLoading(true);
        setError('');
        try {
            await saveData(data, path); // 데이터베이스에 제품 추가
            alert('제품이 추가되었습니다!');
            return true; // 성공 시 true 반환
        } catch (error) {
            console.error('Error adding product:', error);
            setError('Failed to add product');
            return false; // 실패 시 false 반환
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        handleAddData
    };
}

export default useAddData;