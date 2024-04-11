import React from 'react';
import models from '../data/models.json';
import showRooms from '../data/lexus_showrooms_korea.json';
import months from '../data/month.json';
import LexusShowroomSelect from "../components/LexusShowroomSelect";
import UserInputBox from "../components/UserInputBox";
import useMonthDayPicker from "../hooks/useMonthDayPicker";


export default function TestDrive() {
    const [month, setMonth, days] = useMonthDayPicker(0);

    return (
        <main>
            <h1>시승 신청</h1>
            <section>
                <h2>시승 차량 선택</h2>
                <div>모델 명칭</div>
                {models.map(({model}) => (
                    <div>{model}</div>
                ))}
                <div>명칭에 따른 모델 출력</div>
            </section>
            <section>
                <h2>전시장 선택</h2>
                <LexusShowroomSelect showRooms={showRooms}/>
            </section>
            <section>
                <div>
                    <h2>개인정보 입력</h2>
                    시승 희망일
                    <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
                        {months.map(({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    <select>
                        {days.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="">이름</label>
                    <UserInputBox type="text" placeholder={"이름을 입력하세요."}/>
                    <label htmlFor="">전화번호</label>
                    <UserInputBox type="text" placeholder={"전화번호를 입력하세요."}/>
                </div>
            </section>
        </main>
    );
}