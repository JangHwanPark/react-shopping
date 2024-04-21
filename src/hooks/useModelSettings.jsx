import {useState} from 'react';

export default function useModelSettings(initialPrice) {
    const [modelGrade, setModelGrade] = useState('');
    const [selectedExterior, setSelectedExterior] = useState('');
    const [selectedInterior, setSelectedInterior] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(initialPrice);

    return {
        modelGrade,
        setModelGrade,
        selectedExterior,
        setSelectedExterior,
        selectedInterior,
        setSelectedInterior,
        estimatedPrice,
        setEstimatedPrice
    };
}