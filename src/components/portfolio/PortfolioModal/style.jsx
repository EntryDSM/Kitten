import styled from 'styled-components';
import ModalCloseImg from '../../../assets/images/ModalClose.png';

export const ModalWrapper = styled.section`
     width: 100%;
     height: 100%;
    position: fixed;
    background-color: #ffffff;
    border-radius: 20px;
    top: 0px;
    left: 0px;
    z-index: 999;
    overflow: scroll;
`
export const ModalClose = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    background-image: url(${ModalCloseImg});
    background-repeat: no-repeat;
    background-size: cover;
    top: 60.14px;
    right: 60.5px;
`
export const ModalContentBox = styled.div`
    width: 1051px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`
export const ModalHeader = styled.h1`
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    line-height: 57.5px;
    letter-spacing: 5%;
    margin-top: 57px;
    font-family: Nanum Gothic, sans-serif;
`
export const ModalSummary = styled.p`
    font-weight: 400;
    margin-top: 21px;
    font-style: normal;
    font-size: 18px;
    line-height: 27.24px;
    font-family: 'Noto Sans KR', sans-serif;
`
export const ProjectInfo = styled.p`
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    line-height: 31.33px;
    font-family: 'Noto Sans KR', sans-serif;
`
export const ModalContentImg = styled.img`
    background-image: url(${props=>props.img});
    width: 1000px;
    height: 466.67px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 49px;
`
export const DevelopTeam = styled.p`
    font-family: 'NanumSquare',san-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    line-height: 33.15px;
    letter-spacing: 8%;
    margin-top: 60.33px;
    margin-bottom: 20px;
`
export const Developer = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 27.24px;
    margin-top: ${props=>props.marginTop || '0'}px;
`