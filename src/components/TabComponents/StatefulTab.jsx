import React from 'react';

export default function StatefulTab({ title, isSelected, onClick }) {
    // 선택된 탭의 스타일을 지정
    const selectedStyle = {
        fontWeight: isSelected ? 'bold' : 'normal',
        backgroundColor: isSelected ? '#ddd' : 'transparent',
        // 추가적인 스타일 지정 가능
    };

    return (
        <button
            style={selectedStyle}
            onClick={onClick}
        >
            {title}
        </button>
    );
}