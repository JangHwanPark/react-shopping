import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationalTabs from './NavigationalTabs';

describe('NavigationalTabs Component', () => {
    // 기본 렌더링 테스트
    it('renders without crashing', () => {
        const items = [{ name: 'Home', path: '/home' }];
        render(<NavigationalTabs title="Test Title" items={items} className="test-class" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    // 타이틀 렌더링 확인
    it('displays the title correctly', () => {
        const title = 'My Custom Title';
        const items = [{ name: 'Tab1', path: '/tab1' }];
        render(<NavigationalTabs title={title} items={items} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    // 탭 링크 검사
    it('renders the correct number of tabs based on items prop', () => {
        const items = [
            { name: 'Tab1', path: '/tab1' },
            { name: 'Tab2', path: '/tab2' }
        ];
        render(<NavigationalTabs title="Tabs Test" items={items} />);
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });

    // 클릭 이벤트 핸들러 테스트
    it('calls onTabSelect when a tab is clicked', () => {
        const items = [{ name: 'Tab1', path: '/tab1' }];
        const onTabSelect = jest.fn();
        render(<NavigationalTabs title="Tabs Test" items={items} onTabSelect={onTabSelect} />);

        fireEvent.click(screen.getByText('Tab1'));
        expect(onTabSelect).toHaveBeenCalledWith(0);
    });
});