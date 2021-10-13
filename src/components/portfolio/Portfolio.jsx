import React from 'react';
import * as S from './style';
import ProtfolioBack from '../../assets/images/ProtfolioBack.png'
import AdminPage from '../../assets/images/AdminPage.png'
import UserPage from '../../assets/images/UserPage.png'
import UI from '../../assets/images/MainBackground.png'
function Portfolio(){
    const user = {
        img:UserPage,
        title : '입학전형 시스템',
        summary:'학생용 원서제출 페이지 개발'
    }
    const Admin = {
        img:AdminPage,
        title : '입학전형 시스템',
        summary:'전형 관리자 페이지 개발'
    }
    const UIUX = {
        img:UI,
        title:'학생맞춤 UI/UX',
        summary:'학생 맞춤으로만든 UI/UX 디자인'
    }
    const ModalListArr = [user,Admin,UIUX]
  return(
      <S.Wrapper img={ProtfolioBack}>
          <S.Content>
            <S.Head>PORTFOLIO</S.Head>
            <S.Line/>
            <S.Introduce>
                EntryDSM은 입학전형시스템을 비롯한<br/>
                여러 시스템의 개발유지보수를 진행하고 있습니다.
            </S.Introduce>
            <S.ModalsBox>
                {ModalListArr.map((p)=>
                    <S.EachModalBox>
                        <img src={p.img} alt="" />
                        <section>
                            <p>{p.title}</p>
                            <span>{p.summary}</span>
                        </section>
                    </S.EachModalBox>
                )}
            </S.ModalsBox>
          </S.Content>
      </S.Wrapper>
  );
}
export default Portfolio;