import React from 'react';
import * as S from './style';
import backIMG from '../../assets/images/MainBackground.png'
import '@kfonts/bm-dohyeon';
function Main(){
  return(
      <S.Wrapper id="main" img={backIMG}>
        <S.SchoolCircleName>
          <span>대덕소프트웨어</span><br/>
          <span>마이스터고등학교</span><br/>
          <span>입학전형 시스템</span><br/>
          <div>Entry DSM</div>
        </S.SchoolCircleName>
        <S.SubmitButtonDiv>
          <a href="https://apply.entrydsm.hs.kr/">원서 접수하기</a>
        </S.SubmitButtonDiv>
      </S.Wrapper>
  );
}
export default Main;