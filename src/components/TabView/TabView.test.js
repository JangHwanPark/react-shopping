import {render, screen } from "@testing-library/react";
import TabView from "./TabView";

// 테스트 스위트 생성
describe('TabView', () => {
    // "구매" 타이틀에 대한 테스트 케이스
    it('renders purchase model title', () => {
        render(<TabView title={'구매'}/>);
        expect(screen.getByText('구매 차량 선택')).toBeInTheDocument();
    });

    // "시승" 타이틀에 대한 테스트 케이스
    it('renders test drive model title', () => {
        render(<TabView title={'시승'}/>);
        expect(screen.getByText('시승 차량 선택')).toBeInTheDocument();
    });
})