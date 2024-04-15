import React, {useState} from 'react';
import showRooms from '../data/lexus_showrooms_korea.json';
import months from '../data/month.json';

// import Custom Hooks
import useMonthDayPicker from "../hooks/useMonthDayPicker";
import {useTab} from "../context/TabContext";

// import Components
import LexusShowroomSelect from "../components/LexusShowroomSelect/LexusShowroomSelect";
import Input from "../components/Input/Input";
import TabView from "../components/TabView/TabView";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import Select from "../components/Select/Select";

export default function TestDrive() {
    const {currentTab, setCurrentTab} = useTab();
    const [month, setMonth, days] = useMonthDayPicker(0);
    const [selectedDay, setSelectedDay] = useState();

    // Todo: 클릭시 쿼리스트링으로 모델 네임을 전달? (라우팅 동적으로 수정)
    return (
        <main className={'test_drive'}>
            <form action="" className={'test_drive_form'}>
                <Title title={'시승 신청'}/>
                <TabView
                    title={'시승'}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
                <section className={'showroom_section'}>
                    <h2>전시장 선택</h2>
                    <LexusShowroomSelect showRooms={showRooms}/>
                </section>
                <section className={'personal_info_section'}>
                    <div className={'date_picker'}>
                        <h2>개인정보 입력</h2>
                        {/* select 리팩토링 예정 */}
                        <label htmlFor="test_drive_month">시승 희망일</label>
                        <Select
                            value={String(month)}
                            onChange={(e) => setMonth(Number(e.target.value))}
                            options={months.map(({ value, label }) => ({ value, label }))}
                            id="test_drive_month"
                            className="month_select"
                        />
                        <Select
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}
                            options={days.map(day => ({ value: day, label: day }))}
                        />
                    </div>
                    <Input title={'이름'} type="text" placeholder={"이름을 입력하세요."}/>
                    <Input title={'전화번호'} type="text" placeholder={"전화번호를 입력하세요."}/>
                </section>
                <Button className={'btn-primary'} title={'신청하기'}/>
                <Button className={'btn-primary'} title={'돌아가기'}/>
            </form>
        </main>
    );
}