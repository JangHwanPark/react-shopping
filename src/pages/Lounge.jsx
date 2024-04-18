import React from 'react';
import Title from "../components/Title/Title";

export default function Lounge() {
    return (
        <div className={'lounge_container'}>
            <div className={'flex-column'}>
                <main className={'pg_main'}>
                    <Title titleText={'LEXUS LOUNGE'}/>
                    <section className={'section_lounge'}>
                        <figure>
                            <img src={'img/lounge-01.jpg'} alt={'img'}/>
                        </figure>
                        <div className={'text_wrap'}>
                            <p>
                                LEXUS LOUNGE는 렉서스 고객만을 위한<br/>
                                프리미엄 멤버십 서비스입니다.
                            </p>
                            <p>
                                애플리케이션과 웹사이트를 통해 렉서스 고객만을 위한<br/>
                                차량 유지와 관리에 필요한 정보를 확인하고<br/>
                                몇 번의 터치만으로 내게 필요한 서비스를 경험해 보세요.
                            </p>
                            <p>
                                라이프스타일을 중요시하는 당신에게 어울리는 프리미엄 혜택 또한<br/>
                                LEXUS LOUNGE에 준비되어 있습니다.
                            </p>
                        </div>
                    </section>
                    <section className={'section_notice'}>
                        <div className={'notice_wrap'}>
                            <h2>유의사항</h2>
                            <p>렉서스 라운지의 이미지는 고객의 이해를 돕기 위해 연출된 것으로 실제와 차이가 있을 수 있습니다.</p>
                            <p>렉서스 라운지 서비스 관련 자세한 사항은 렉서스 라운지 고객 지원실 통해 문의 바랍니다.</p>
                            <p>제휴 서비스 혜택은 당사 사정에 따라 예고 없이 변경될 수 있습니다.</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}