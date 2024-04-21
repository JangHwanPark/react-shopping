import {useState} from 'react';

export default function useSectionNavigation(initialSection = 0) {
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(initialSection);

    const nextSection = () => setSelectedSectionIndex(prev => prev + 1);
    const prevSection = () => setSelectedSectionIndex(prev => prev - 1);

    return [selectedSectionIndex, nextSection, prevSection];
}