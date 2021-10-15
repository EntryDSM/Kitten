import React, { useState } from 'react';
import styled from 'styled-components';
import Eye from '../../assets/images/eye.png'
import Celender from '../../assets/images/celender.png';
import Moniter from '../../assets/images/moniter.png';
import Eyehover from '../../assets/images/hovereye.png';
import Celenderhover from '../../assets/images/hovercelender.png';
import Moniterhover from '../../assets/images/hovermoniter.png';
import WhatEntrylogo from '../../assets/images/What is Entry.png';

function WhatisEntry() {
    const entrycontent = 'Entry DSM은 대덕소프트웨어마이스터고등학교 \n학생들의 자발적 참여로 개발 및 유지보수가 \n이뤄지고 있는 입학전형시스템입니다';
    const firstExplanation = '입학전형시스템에 로그인 하시면\n학교 홈페이지에 접속할 필요 없이\n다가오는 일정을 손쉽게 \n확인하실 수 있습니다.';
    const secondExplanation = '학생들의 의견을 수렴하여 구성된\n사용자 친화적 UI를 제공하므로 \n원서 제출 및 전형료 납부를 쉽고\n 간편하게 진행할 수 있습니다.';
    const thirdExplanation = '해외 IP 차단, DDOS 대응 등 \n보안성 강화에총력을 다해 \n여러분께 안정적으로 서비스를\n제공할 수 있도록 노력하겠습니다.';

    const [celender, Hovercelender] = useState(false);
    const [eye, Hovereye] = useState(false);
    const [moniter, Hovermoniter] = useState(false);
    return (
        <div id="entryDSM">
            <Topdiv>
                <img width="301px" src={WhatEntrylogo} />
                <Contnetspan>
                    <Contentsa>{entrycontent}</Contentsa>
                </Contnetspan>
            </Topdiv>
            <Maprootdiv>
                <Rootdiv
                    onMouseOver={() => Hovercelender(true)}
                    onMouseOut={() => Hovercelender(false)}
                >
                    <Sort1>
                        <div>
                            <Img1 width="133px" src={celender ? Celenderhover : Celender} />
                            <br />
                            <Roottitle>입학전형시스템</Roottitle>
                            <br />
                            <Rootcontent>{firstExplanation}</Rootcontent>
                        </div>
                    </Sort1>
                </Rootdiv>
                <Rootdiv
                    margin = "50"
                    onMouseOver={() => Hovereye(true)}
                    onMouseOut={() => Hovereye(false)}
                >
                    <Sort1>
                        <div>
                            <Img2 width="160px" src={eye ? Eyehover : Eye}
                            />
                            <br />
                            <Roottitle>사용자 친화적 UI</Roottitle>
                            <br />
                            <Rootcontent>{secondExplanation}</Rootcontent>
                        </div>
                    </Sort1>
                </Rootdiv>
                <Rootdiv
                    margin = "50"
                    onMouseOver={() => Hovermoniter(true)}
                    onMouseOut={() => Hovermoniter(false)}
                >
                    <Sort1>
                        <div>
                            <Img3 width="145px" src={moniter ? Moniterhover : Moniter} />
                            <br />
                            <Roottitle>강력한 보안</Roottitle>
                            <br />
                            <Rootcontent>{thirdExplanation}</Rootcontent>
                        </div>
                    </Sort1>
                </Rootdiv>
            </Maprootdiv>
        </div>
    );
}
const Sort1 = styled.div`
    display:flex;
    justify-content: center;
    text-align: center;
`;
const Maprootdiv = styled.div`
    display:flex;
    margin-top:110px;
    width: 1240px;
    margin: 0 auto;
    /* justify-content : center; */
`;
const Contentsa = styled.a`
    white-space: pre-wrap;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    line-height: 40px;
    font-weight: 400;
`;
const Topdiv = styled.span`
    display:flex;
    /* justify-content : center; */
    width: 1240px;
    margin: 0 auto;
    margin-bottom: 104px;
    margin-top: 100px;
`;
const Contnetspan = styled.span`
    margin-left:100px;
`;
const Roottitle = styled.a`
    font-size:20px;
    font-family: "bm-dohyeon";
    font-weight: 400;
`;
const Rootdiv = styled.div`
    :hover{
        background-color : #FF9B9F;
        color : #ffffff;
    } 
    width:380px;
    height:380px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: ${props=>props.margin || 0}px;
    margin-bottom:132px;
`
const Rootcontent = styled.a`
    white-space: pre-wrap;
    font-size: 17px;
    line-height: 23px;
    font-family: 'Noto Sans KR', sans-serif;
    `;
const Img1 = styled.img`
    margin-top:42px;
    margin-bottom:26px;
`;
const Img2 = styled.img`
    margin-top:71px;
    margin-bottom:35px;
`;
const Img3 = styled.img`
    margin-top:60px;
    margin-bottom:24px;
`;
export default WhatisEntry;