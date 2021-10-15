import React from "react";
import styled from "styled-components";
import Facebook from "../../assets/images/facebook.png"
import Github from "../../assets/images/github.png"

function Footer(){
    const contents = '\n@ 2021 Entry\n\n개인정보 처리방침 ㅣ 이용약관\n(34111) 대전광역시 유성구 가정북로 76(장동 23-9)\n교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax : 042-863-4308\nEntrepreneur ';
    return(
    <MainFooter>
            <Contentsdiv>
                <Entry>Entry</Entry>
                <Contentsa>{contents}</Contentsa>
            </Contentsdiv>
            <Introduce>
                <Introducea>Entry 소개</Introducea><br />
                <Introducea>시스템 소개</Introducea><br />
                <Introducea>개발자 소개</Introducea><br />
                <Image width="40px" src={Facebook}/>
                <Image width="40px" src={Github}/>
            </Introduce>
    </MainFooter>
    );
}

const MainFooter = styled.footer`
    height: 304px;
    background-color: #FF9B9F;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    white-space: pre-wrap;
    display: flex;
`;
const Contentsdiv =styled.div`
    line-height :34px;
    padding-top: 26px;
    padding-left: 320px;
`;
const Contentsa = styled.a`
    font-size:18px;
`;
const Entry = styled.a`
    font-size: 40px;
    font-weight: 700;
`;
const Introduce = styled.div`
    padding-left: 369px;
    padding-top: 44px;
`;
const Introducea = styled.a`
    font-size: 20px;
    line-height: 45px;
    margin-left: 17px;
`;
const Image = styled.img`
    margin: 15px;
`;
export default Footer;
