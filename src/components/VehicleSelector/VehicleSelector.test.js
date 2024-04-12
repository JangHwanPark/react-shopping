// 테스트 스위트 생성
import {render} from "@testing-library/react";
import VehicleSelector from "./VehicleSelector";

describe('VehicleSelector', () => {
    // 테스트 케이스 생성
    it('renders model item', () => {
        render(<VehicleSelector title={'구매'}/>)
    })
})