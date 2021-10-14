import React from 'react';
import * as S from './style';
import backIMG from '../../assets/images/MainBackground.png'
import '@kfonts/bm-dohyeon';

function Main(){
  return(
      <S.Wrapper img={backIMG}>
        <S.SchoolCircleName>
          <span>대덕소프트웨어</span><br/>
          <span>마이스터고등학교</span><br/>
          <span>입학전형 시스템</span><br/>
          <div>EntryDSM</div>
        </S.SchoolCircleName>
        <S.SubmitButtonDiv>
          <button>원서 접수하기</button>
        </S.SubmitButtonDiv>
      </S.Wrapper>
  );
}
export default Main;