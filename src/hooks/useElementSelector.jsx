import { useState } from 'react';

// 사용법: const [currentColor, setCurrentColor, handleColorChange] = useColorSelector(defaultColor);
export function useColorSelector(defaultColor) {
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    const handleColorChange = (newColor) => {
        setSelectedColor(newColor);
    };

    return [selectedColor, setSelectedColor, handleColorChange];
}