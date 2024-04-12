import React, {useEffect, useState} from 'react';

/**
 * 선택된 월을 기반으로 월과 일을 선택하는 사용자 정의 훅입니다.<br>
 * 이 훅은 선택된 월에 있는 일 수를 계산하고 'days' 상태를 업데이트합니다.
 *
 * @param {number} initialMonth - 초기 월 값, 일반적으로 월을 나타내는 정수 (0-11).
 * @returns {[number, Function, number[]]} 현재 월, 월 설정 함수, 선택된 월의 일 배열을 반환합니다.
 */
function useMonthDayPicker(initialMonth) {
    // month: 사용자가 선택한 월을 저장하는 상태
    const [month, setMonth] = useState(initialMonth);

    // days: 선택된 월(month)의 일을 저장하는 상태
    const [days, setDays] = useState([]);

    // 선택된 월이 변경될 때마다 일 배열을 업데이트
    useEffect(() => {
        /**
         * 주어진 월에 있는 모든 일로 'days' 상태를 업데이트합니다.
         * @param {number} month - 현재 월 (0-11).
         */
        const updateDays = (month) => {
            // 현재 연도를 가져옴
            const year = new Date().getFullYear();

            // 월의 일 수를 가져옴
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // 일 배열 생성
            const daysArray = Array.from({length: daysInMonth}, (_, i) => i + 1);

            // 새 일 배열로 상태를 업데이트
            setDays(daysArray);
        };

        updateDays(month);
    }, [month]);

    return [month, setMonth, days];
}

export default useMonthDayPicker;