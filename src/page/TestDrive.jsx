import React from 'react';
import showRooms from '../data/lexus_showrooms_korea.json';
import months from '../data/month.json';
import LexusShowroomSelect from "../components/Select/LexusShowroomSelect";
import UserInputBox from "../components/UserInputBox";
import useMonthDayPicker from "../hooks/useMonthDayPicker";
import VehicleSelector from "../components/VehicleSelector/VehicleSelector";


export default function TestDrive() {
    const [month, setMonth, days] = useMonthDayPicker(0);

    return (
        <main>
            <form action="">
                <h1>시승 신청</h1>
                <VehicleSelector title={'시승'}/>
                <section>
                    <h2>전시장 선택</h2>
                    <LexusShowroomSelect showRooms={showRooms}/>
                </section>
                <section>
                    <div>
                        <h2>개인정보 입력</h2>
                        시승 희망일
                        <select value={String(month)} onChange={(e) => setMonth(Number(e.target.value))}>
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
                <button>신청하기</button>
                <button>돌아가기</button>
            </form>
        </main>
    );
}