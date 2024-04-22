import React, {useState} from 'react';
import useAddData from "../hooks/useAddData";
import Modal from "../components/ModalComponents/Modal";
import ModelsColorList from "../components/ModelSections/ModelsColorList";
import {exteriorColor} from "../data/my_car";

export default function TestPage() {



    return (
        <div>
            <ModelsColorList
                title={'익스테리어'}
                colorList={exteriorColor}

            />
        </div>
    );
}