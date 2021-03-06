import React from 'react';
import * as S from './style'
import OutsideClickHandler from 'react-outside-click-handler';
function PortfolioModal(props){
    const {selectPortfolioInfo,setOpenModal} = props;
  return(
    <OutsideClickHandler
    onOutsideClick={() => {
        setOpenModal(false);
    }}
    >
        <S.ModalWrapper>
            <S.ModalContentBox>
                <S.ModalClose onClick={()=>setOpenModal(false)}/>
                <S.ModalHeader>{selectPortfolioInfo.title}</S.ModalHeader>
                <S.ModalSummary>{selectPortfolioInfo.summary}</S.ModalSummary>
                <S.ProjectInfo>{selectPortfolioInfo.projectInfo}</S.ProjectInfo>
                <S.ModalContentImg img={selectPortfolioInfo.img}/>
                <S.DevelopTeam>{selectPortfolioInfo.developTeam}</S.DevelopTeam>
                {selectPortfolioInfo.type === 'develop' ? 
                    <div>
                        <S.Developer marginTop="9">웹 프론트엔드 개발 : {selectPortfolioInfo.frontDeveloper}</S.Developer>
                        <S.Developer>백엔드 개발 : {selectPortfolioInfo.backDeveloper}</S.Developer>
                    </div>
                    : 
                        <S.Developer marginTop="9">디자인 : {selectPortfolioInfo.design}</S.Developer>
                }
            </S.ModalContentBox>
        </S.ModalWrapper>
      </OutsideClickHandler>
  );
}
export default PortfolioModal;