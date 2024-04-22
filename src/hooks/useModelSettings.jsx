import React, {useState} from 'react';

export default function useModelSettings(initialPrice) {
    const [modelGrade, setModelGrade] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(initialPrice);

    return {
        modelGrade,
        setModelGrade,
        estimatedPrice,
        setEstimatedPrice
    };
}