import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 860px;
    background-image: url(${props=>props.img});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Content = styled.section`
    width: 1278px;
    height: 100%;
    margin: 0 auto;
`
export const Head = styled.h1`
    font-family: 'bm-dohyeon';
    font-weight: 400;
    font-size: 55px;
    line-height: 67px;
    padding-top: 107px;
`
export const Line = styled.div`
    width: 320px;
    border-bottom: 4px solid #EF6268;
    margin-top: 9px;
`
export const Introduce = styled.p`
    margin-top: 9px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 5px;
`
export const ModalsBox = styled.section`
    width: 1270px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    margin-top: 47px;
    justify-content: space-between;
`
export const EachModalBox = styled.div`
    width: 390px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    >img{
        width: 100%;
        height: 182px;
    }
    >section{
        display: flex;
        flex-direction: column;
        align-items: center;
        >p{
            margin-top: 31px;
            font-family: 'bm-dohyeon';
            font-weight: 400;
            font-style: normal;
            font-size: 27px;
            line-height: 33.21px;
            letter-spacing: 10%;
        }
        >span{
            margin-top: 16px;
            margin-bottom: 36.86px;
        }
    }
`