import React, {useState} from 'react';

export default function Modal({...rest}) {
    // 모달 팝업
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    const handleShowModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* 모달 토글 버튼 */}
            <button className={'btn-primary'} onClick={handleShowModal}>
                {isOpen ? rest.close : rest.open}
            </button>

            {/* true 시 모달 출력, 배경 클릭시 모달 종료 */}
            <div id="modal-container" className={`${isOpen ? 'one' : ''} ${isOpen ? '' : 'out'}`} onClick={() => setIsOpen(false)}>
                <div className="modal-background">
                    {/* 모달 내부 클릭해도 종료되지않도록 설정 (stopPropagation) */}
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>I'm a Modal</h2>
                        <p>Hear me roar.</p>
                    </div>
                </div>
            </div>
        </>
    );
}