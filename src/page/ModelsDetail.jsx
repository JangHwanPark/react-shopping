import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";

export default function Models() {
    const {modelId} = useParams();
    console.log(modelId)

    const param = useParams()
    console.log(param.modelId)

    return (
        <div>
            <div>useParams: {modelId}</div>
            <div>useParams: {param.modelId}</div>
        </div>
    );
}