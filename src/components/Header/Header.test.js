// 테스트 스위트 생성
import {render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
    // Header 컴포넌트 렌더링 테스트
    it('renders Header Component', () => {
        // 테스트를 위한 컴포넌트 랜더링
        render(<Header/>);

        // 로고 이미지가 존재하는지 확인
        const logo = screen.getByAltText("Lexus Korea Logo");
        expect(logo).toBeInTheDocument();

        // 네비게이션 링크들이 정상적으로 렌더링되는지 확인
        const modelLink = screen.getByText("MODEL");
        expect(modelLink).toBeInTheDocument();
        expect(modelLink.getAttribute("href")).toBe("/models");

        const testDriveLink = screen.getByText("시승신청");
        expect(testDriveLink).toBeInTheDocument();
        expect(testDriveLink.getAttribute("href")).toBe("/test-drive");

        const loungeLink = screen.getByText("MY LEXUS LOUNGE");
        expect(loungeLink).toBeInTheDocument();
        expect(loungeLink.getAttribute("href")).toBe("/lounge");

        const loginLink = screen.getByText("LOGIN");
        expect(loginLink).toBeInTheDocument();
        expect(loginLink.getAttribute("href")).toBe("/login");
    })
})