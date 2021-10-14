import React,{useEffect, useState} from 'react';
import * as S from './style';
import ProtfolioBack from '../../assets/images/ProtfolioBack.png'
import AdminPage from '../../assets/images/AdminPage.png'
import UserPage from '../../assets/images/UserPage.png'
import UI from '../../assets/images/MainBackground.png'
import PortfolioModal from './PortfolioModal/PortfolioModal';
function Portfolio(){
    const ModalListArr = [{
        name : "userPage",
        img:UserPage,
        title : '입학전형 시스템',
        summary:'학생용 원서제출 페이지 개발',
        projectInfo :'원서제출을 위한 개인정보 기입하고 자동으로 성적을 산출하여 원서를 발급 • 출력할 수 있는 메인 페이지입니다.',
        developTeam : '입학전형시스템 메인플랫폼개발팀'
    },
    {
        name: 'AdminPage',
        img:AdminPage,
        title : '입학전형 시스템',
        summary:'전형 관리자 페이지 개발',
        projectInfo : "지원자들의 원서 제출 현황을 관리하고, 쾌적한 시스템 운영을 제공하는 관리자 대시보드입니다.",
        developTeam : '입학전형시스템 메인플랫폼개발팀'
    },
    {
        name : 'UI',
        img:UI,
        title:'학생맞춤 UI/UX',
        summary:'학생 맞춤으로만든 UI/UX 디자인',
        projectInfo : '원서제출을 간편하고 원활하게 하기위한  사용하기 간편한 UI / UX 디자인 입니다.',
        developTeam : '입학전형시스템 메인플랫폼개발팀'
    }]
    const [openModal,setOpenModal] = useState(false);
    const [selectPortfolioInfo,setSelectPortfolioInfo] = useState('')
    const onClickOpenModal = (e) => {
        setOpenModal(true);
        setSelectPortfolioInfo(e);
    }
    useEffect(()=>{
        console.log(selectPortfolioInfo,",",openModal);
    },[openModal,selectPortfolioInfo]);
  return(
      <S.Wrapper img={ProtfolioBack}>
          {openModal ? <PortfolioModal selectPortfolioInfo={selectPortfolioInfo} setOpenModal={setOpenModal}/> : ''}
          <S.Content>
            <S.Head>PORTFOLIO</S.Head>
            <S.Line/>
            <S.Introduce>
                EntryDSM은 입학전형시스템을 비롯한<br/>
                여러 시스템의 개발유지보수를 진행하고 있습니다.
            </S.Introduce>
            <S.ModalsBox>
                {ModalListArr.map((li)=>
                    <S.EachModalBox onClick={()=>onClickOpenModal(li)}>
                        <img src={li.img} alt="" />
                        <section>
                            <p>{li.title}</p>
                            <span>{li.summary}</span>
                        </section>
                    </S.EachModalBox>
                )}
            </S.ModalsBox>
          </S.Content>
      </S.Wrapper>
  );
}
export default Portfolio;