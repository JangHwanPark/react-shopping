import React, {useState} from 'react';
import showRooms from '../../data/lexus_showrooms_korea.json';
import months from '../../data/month.json';

// import Custom Hooks
import useMonthDayPicker from "../../hooks/useMonthDayPicker";
import {useTab} from "../../context/TabContext";

// import Components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import ModelLayout from "../../layout/ModelLayout";
import models from "../../data/models.json";

export default function TestDrive() {
    const {currentTab, setCurrentTab} = useTab();

    // 현재 연도와 선택한 월에따라 일을 계산하여 월, 일을 반환하는 커스텀 훅
    const [month, setMonth, days] = useMonthDayPicker(0);

    // 선택된 일(day)을 상태로 관리
    const [selectedDay, setSelectedDay] = useState();

    // 선택된 쇼룸의 이름을 상태로 관리
    const [selectedShowroom, setSelectedShowroom] = useState('');

    // DebugLog
    console.log('TestDrive: ', models[currentTab]);

    return (
        <ModelLayout
            title={'시승 차량 선택'}
            items={models.map(model => ({
                name: model.name,
                path: `/test-drive/${model.name}`,
            }))}            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
        >

            {/* glb 의 inner_wrap 적용됨*/}
            <form action="" className={'test_drive_form inner_wrap'}>
                <div className={'contents_wrap cont_center'}>
                    <div className={'cont_main'}>

                        {/* select showroom*/}
                        <section className={'showroom_section'}>
                            <h2 className={'cont-title'}>전시장 선택</h2>
                            <div className={'select_wrap'}>
                                <Select
                                    id="test_drive_show_rooms"
                                    className="select_show_rooms"
                                    value={selectedShowroom}
                                    onChange={(e) => setSelectedShowroom(e.target.value)}
                                    options={showRooms.map(({name, address}) => (
                                        {value: address, label: name}
                                    ))}
                                />
                            </div>
                        </section>

                        {/* input user info */}
                        <section className={'section_info'}>
                            <h2 className={'cont-title'}>개인정보 입력</h2>
                            <div className={'info_wrap flex-column'}>
                                <div className={'date_picker flex'}>
                                    <h3>시승 날짜 선택</h3>
                                    <Select
                                        id="test_drive_month"
                                        className="select_month"
                                        value={String(month)}
                                        onChange={(e) => setMonth(Number(e.target.value))}
                                        options={months.map(({value, label}) => ({value, label}))}
                                    />
                                    <Select
                                        id="test_drive_day"
                                        className="select_day"
                                        value={selectedDay}
                                        onChange={(e) => setSelectedDay(e.target.value)}
                                        options={days.map(day => ({value: day, label: day}))}
                                        addDaySuffix={true}
                                    />
                                </div>
                                <Input
                                    id={'name_input'}
                                    divClassName={'flex-column text_wrap'}
                                    className={'primary_input input_info'}
                                    title={'이름'}
                                    type="text"
                                    placeholder={"이름을 입력하세요."}
                                />
                                <Input
                                    id={'phone_input'}
                                    divClassName={'flex-column text_wrap'}
                                    className={'primary_input input_info'}
                                    title={'전화번호'}
                                    type="text"
                                    placeholder={"전화번호를 입력하세요."}
                                />
                                <div className={'btn-wrap'}>
                                    <div className={'flex-space-around'}>
                                        <Button className={'btn-primary'} title={'돌아가기'}/>
                                        <Button className={'btn-primary'} title={'신청하기'}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </form>
        </ModelLayout>
    );
}