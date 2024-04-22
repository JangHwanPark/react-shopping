import { useState } from 'react';

// 사용법: const {currentColor, handleColorChange} = useColorSelector({exterior: defaultExteriorColor, interior: defaultInteriorColor});
export function useColorSelector(defaultColors) {
    const [colors, setColors] = useState(defaultColors);

    const handleColorChange = (type, newColor) => {
        setColors(prevColors => ({
            ...prevColors,
            [type]: newColor
        }));
    };

    return {colors, handleColorChange};
}