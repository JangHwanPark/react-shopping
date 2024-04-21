import React from 'react';
import Button from "./Button";
import ComingSoon from "../../utils/comingSoon";

export default function ModelConfigButton({ onPrev, onNext, isFinalStep }) {
    return (
        <div className={'config_btn_wrap flex-space-between'}>
            {!isFinalStep ? (
                <>
                    <Button title={'이전'} className={'config_btn btn-primary'} onClick={onPrev}/>
                    <Button title={'다음'} className={'config_btn btn-primary'} onClick={onNext}/>
                </>
            ) : (
                <>
                    <Button title={'저장하기'} className={'config_btn btn-primary'} onClick={ComingSoon}/>
                    <Button title={'시승신청'} className={'config_btn btn-primary'} onClick={ComingSoon}/>
                </>
            )}
        </div>
    );
}