import React, {useEffect, useState} from 'react';

function useMonthDayPicker(initialMonth) {
    // month : 선택한 월을 저장
    const [month, setMonth] = useState(initialMonth);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const updateDays = (month) => {
            const year = new Date().getFullYear(); // 현재 연도
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const daysArray = Array.from({length: daysInMonth}, (_, i) => i + 1);
            setDays(daysArray);
        };

        updateDays(month);
    }, [month]);

    return [month, setMonth, days];
}

export default useMonthDayPicker;