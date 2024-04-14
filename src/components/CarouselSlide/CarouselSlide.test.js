import {render, screen} from "@testing-library/react";
import CarouselSlide from "./CarouselSlide";

// 테스트 스위트 생성
describe('CarouselSlide', () => {
    // 렌더링된 이미지 경로가 실제 이미지 경로와 일치한지 확인
    it('Carousel slide component rendering', () => {
        const component = render(<CarouselSlide/>);

    })

    // 버튼 클릭시 클릭한 인덱스 번호와 이미지 url 이 일치한지 확인
})