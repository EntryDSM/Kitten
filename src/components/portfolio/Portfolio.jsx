import React, { useEffect, useState } from 'react';
import * as S from './style';
import ProtfolioBack from '../../assets/images/ProtfolioBack.png'
import PortfolioModal from './PortfolioModal/PortfolioModal';
import Magnifier from '../../assets/images/Magnifier.png'
import { ModalListArr } from './constant';

function Portfolio() {
    const [openModal, setOpenModal] = useState(false);
    const [selectPortfolioInfo, setSelectPortfolioInfo] = useState('')
    const onClickOpenModal = (e) => {
        setOpenModal(true);
        setSelectPortfolioInfo(e);
    }
    useEffect(() => {
        if (openModal) {
            document.body.style.cssText = `
                position: fixed;
                top: -${window.scrollY} px;
                overflow - y: scroll;
                width: 100 %;
            `
            return () => {
                const scrollY = document.body.style.top;
                document.body.style.cssText = "";
                window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
            };
        }
    }, [openModal]);
    return (
        <div>
            <S.Wrapper id="portfolio" img={ProtfolioBack}>
                {openModal ? <PortfolioModal selectPortfolioInfo={selectPortfolioInfo} setOpenModal={setOpenModal} /> : ''}
                <S.Content>
                    <S.Head>PORTFOLIO</S.Head>
                    <S.Line />
                    <S.Introduce>
                        EntryDSM은 입학전형시스템을 비롯한<br />
                        여러 시스템의 개발유지보수를 진행하고 있습니다.
                    </S.Introduce>
                    <S.ModalsBox>
                        {ModalListArr.map((li) =>
                            <S.EachModalBox>
                                <div onClick={() => onClickOpenModal(li)}>
                                    <div>
                                        <S.Magnifier backImg={Magnifier} />
                                        <img src={li.img} alt="" />
                                    </div>
                                </div>
                                <section>
                                    <p>{li.title}</p>
                                    <span>{li.summary}</span>
                                </section>
                            </S.EachModalBox>
                        )}
                    </S.ModalsBox>
                </S.Content>
            </S.Wrapper>
        </div>
    );
}
export default Portfolio;