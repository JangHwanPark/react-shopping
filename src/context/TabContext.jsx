import {createContext, useContext, useState} from "react";

// ContextAPI 생성 및 초기값 설정 (초기값을 설정하지 않았으므로 기본값 적용: undefined)
const TabContext = createContext();

// 커스텀훅 생성(useTab): useContext 를 사용하여 TabContext 의 현재 값을 반환
// 컴포넌트에서 useTab 을 호출하여 TabContext 가 제공하는 currentTab, setCurrentTab 사용 가능
export const useTab = () => useContext(TabContext);
// console.log(TabContext);

// 자식 컴포넌트에게 TabContext 의 데이터를 제공
// props 로 받은 children 은 이 컴포넌트 내부에 렌더링될 자식 요소
export const TabProvider = ({ children }) => {
    // useState 를 사용해 currentTab 상태를 관리 (초기값: 0)
    const [currentTab, setCurrentTab] = useState(0);

    // Provider 를 사용하여 currentTab, setCurrentTab 을 value 에 저장함.
    // TabProvider 자식들은 useTab 을 사용해서 value 데이터를 사용 가능
    return (
        <TabContext.Provider value={{ currentTab, setCurrentTab }}>
            {children}
        </TabContext.Provider>
    )
}