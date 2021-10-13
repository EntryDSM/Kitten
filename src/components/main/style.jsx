import styled from 'styled-components';
import '@kfonts/bm-dohyeon';

export const Wrapper = styled.div`
    width: 100%;
    height: 850px;
    margin-top: 120px;
    background-image: url(${props=>props.img});
    background-repeat : no-repeat;
    background-size : cover;
`
export const Introduce = styled.div`
    padding: 228px 0 0 320px;
`
export const SchoolCircleName = styled.p`
    font-family: "bm-dohyeon";
    font-weight: 400;
    font-size: 45px;
    color: ${props=>props.color || '#ffffff'};
    letter-spacing: 0.14em;
    line-height: 74px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    >span{
        width:400px
    }
    > div {
        font-size: 60px;
    }
`
export const SubmitButton = styled.button`
    margin-left: 326px;
    width: 250px;
    height: 83.37px;
    border-radius: 10px;
    background: linear-gradient(94.67deg, #EF6268 0%, #FF8888 100%);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    font-size: 30px;
    line-height: 80px;
    font-family: "bm-hanna-pro-otf";
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
`