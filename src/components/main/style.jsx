import styled from 'styled-components';
import '@kfonts/bm-dohyeon';

export const Wrapper = styled.div`
    width: 100%;
    height: 850px;

    /* padding-top: 120px; */
    background-image: url(${props=>props.img});

    background-repeat : no-repeat;
    background-size : cover;
`
export const SchoolCircleName = styled.p`
    width: 1280px;
    margin: 0 auto;
    padding-top: 228px;
    font-family: "bm-dohyeon";
    font-weight: 400;
    font-size: 45px;
    color: ${props => props.color || '#ffffff'};
    letter-spacing: 0.14em;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    line-height: 60px;
    >span{
        width:400px
    }
    > div {
        font-size: 60px;
        background: linear-gradient(to bottom, #F79296, #FCB9BA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        line-height: 74px;
    }
`
export const SubmitButtonDiv = styled.div`
    width: 1280px;
    margin: auto;
    display: flex;
    /* align-items: center; */
    background: transparent;
    >a {
        margin-left: 6px;
        margin-top: 15px;
        width: 250px;
        height: 87.37px;
        border-radius: 10px;
        background: linear-gradient(94.67deg, #EF6268 0%, #FF8888 100%);
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
        line-height: 30px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
        font-family: "bm-hanna-pro-otf";
        font-style: normal;
        font-weight: normal;
        align-items:center;
        color: #ffffff;
    }
`