import React from 'react';
import showRooms from '../data/lexus_showrooms_korea.json';
import months from '../data/month.json';

// import Custom Hooks
import useMonthDayPicker from "../hooks/useMonthDayPicker";

// import Components
import LexusShowroomSelect from "../components/LexusShowroomSelect/LexusShowroomSelect";
import Input from "../components/Input/Input";
import TabView from "../components/TabView/TabView";
import Button from "../components/Button/Button";

export default function TestDrive() {
    const [month, setMonth, days] = useMonthDayPicker(0);

    return (
        <main>
            <form action="">
                <h1>시승 신청</h1>
                <TabView title={'시승'}/>
                <section>
                    <h2>전시장 선택</h2>
                    <LexusShowroomSelect showRooms={showRooms}/>
                </section>
                <section>
                    <div>
                        <h2>개인정보 입력</h2>
                        {/* select 리팩토링 예정 */}
                        <label htmlFor="">시승 희망일</label>
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
                    </div>
                    <Input title={'이름'} type="text" placeholder={"이름을 입력하세요."}/>
                    <Input title={'전화번호'} type="text" placeholder={"전화번호를 입력하세요."}/>
                </section>
                <Button title={'신청하기'}/>
                <Button title={'돌아가기'}/>
            </form>
        </main>
    );
}