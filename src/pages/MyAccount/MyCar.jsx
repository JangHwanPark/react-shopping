import React from 'react';
import {useAuth} from "../../context/AuthContext";
import AccountLayout from "../../layout/AccountLayout";
import SectionLayout from "../../layout/SectionLayout";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import Button from "../../components/Button/Button";
import useAuthRedirect from "../../hooks/useAuthRedirect";

export default function MyCar() {
    const {user} = useAuth();

    // DebugLog
    console.log('MyCar: ', user)

    // 로그인이 되어 있지 않다면 로그인 페이지로 이동
    useAuthRedirect(user)

    // 차량 정보가 있는지 확인하는 flag
    const hasVehicleDetails = user && user.vehicleDetails;

    // 최근 정비 내역이 있는지 확인하는 flag
    const hasMaintenanceHistory = user && user.maintenanceHistory;

    /*
     * '대표 차량': user.vehicleDetails?.model,
     * '차량 별명': user.vehicleDetails?.nickname,
     *  '차량 번호': user.vehicleDetails?.licensePlate,
     *  '모델명': user.vehicleDetails?.modelName,
     *  '차대 번호': user.vehicleDetails?.chassisNumber,
     *  '출고 일자': user.vehicleDetails?.releaseDate,
     */
    // 필요한 사용자 정보만 추출
    const userDetails = user ? {
        '대표 차량': user.vehicleDetails?.model,
        '차량 별명': user.vehicleDetails?.phoneNumber,
        '차량 번호': user.vehicleDetails?.phoneNumber,
        '모델명': user.vehicleDetails?.phoneNumber,
        '차대 번호': user.vehicleDetails?.phoneNumber,
        '출고 일자': user.vehicleDetails?.phoneNumber,
    } : {};

    // userDetails 를 배열로 변환 (UnorderedList 컴포넌트가 배열만 받음)
    const userDetailsArray = Object.entries(userDetails).map(([key, value]) => (
        {key, value}
    ));

    return (
        <AccountLayout user={user}>
            <SectionLayout title={'사용자 보유 차량'} className={'section_account'}>
                {hasVehicleDetails ? (
                    <UnorderedList
                        className={'account-details'}
                        listItems={userDetailsArray}
                    />
                ) : (
                    <div className={'not_registered'}>
                        <p>차량이 등록되어 있지 않습니다.</p>
                        <Button
                            className={'btn-primary'}
                            onClick={() => alert('준비중 입니다.')}
                            title={'차량 등록하기'}
                        />
                    </div>
                )}
            </SectionLayout>
            <SectionLayout title={'최근 정비 내역'} className={'section_account'}>
                {hasMaintenanceHistory ? (
                    <address>
                        서비스 센터명: [센터명]<br/>
                        담당 SA: [SA명]<br/>
                        전화: [전화번호]<br/>
                        위치: [위치]
                    </address>
                ) : (
                    <div className={'not_registered'}>
                        <p>최근 정비내역이 존재하지 않습니다.</p>
                        <Button
                            className={'btn-primary'}
                            onClick={() => alert('준비중 입니다.')}
                            title={'정비 예약하기'}
                        />
                    </div>
                )}
            </SectionLayout>
        </AccountLayout>
    );
}