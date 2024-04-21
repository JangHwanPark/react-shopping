import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useTab} from "../context/TabContext";
import models from "../data/models.json";

/**
 * 라우트 파라미터를 기반으로 모델 선택 및 해당 탭 인덱스를 관리하는 커스텀 훅
 * @param {string} defaultModelId - URL에 ID가 지정되지 않은 경우 사용할 기본 모델 ID
 * @returns {Array} - 선택된 모델 ID, 모델 변경을 처리하는 함수, 현재 탭 인덱스를 포함하는 배열을 반환
 */
export default function useModelTab(defaultModelId) {
    const { currentTab, setCurrentTab } = useTab();
    const { modelId } = useParams() || defaultModelId;
    const navigate = useNavigate();
    const [selectedModel, setSelectedModel] = useState(modelId);

    // modelId가 변경될 때 탭 인덱스와 모델 선택을 업데이트하는 useEffect
    useEffect(() => {
        const tabIndex = models.findIndex(model => model.name === modelId);
        if (tabIndex !== -1) setCurrentTab(tabIndex); // 모델이 발견되면 현재 탭 인덱스를 업데이트
        setSelectedModel(modelId); // 선택된 모델 ID 상태를 업데이트
    }, [modelId, setCurrentTab]);

    // 모델 변경을 처리하는 함수
    const handleModelChange = (newModelId) => {
        setSelectedModel(newModelId); // 새로운 모델 ID를 설정
        navigate(`/model/${newModelId}/model-configuration`); // 새 모델의 설정 페이지로 이동
    };

    return [selectedModel, handleModelChange, currentTab];
}