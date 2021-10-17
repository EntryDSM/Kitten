import styled from 'styled-components';
import Surch from "../../assets/images/Surch.png"
export const QNAWrapper = styled.div`
    width: 1140px;
    height: 970px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    font-family: "bm-dohyeon";
`

export const QNATitle = styled.div`
    border-bottom: 4px solid #EF6268;
    font-size: 55px;
    font-weight: 400;
    margin-top: 80px;
    padding: 0 10px;
    margin-bottom: 80px;
    padding-bottom: 5px;
    
    
`

export const QNABox = styled.div`
    width: 1000px;
    border-top: 2px solid #626262;
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;
`
export const QWrapper = styled.div`
    height: 80px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #626262;
    cursor: pointer;
`
export const QNum = styled.div`
    font-size: 40px;
    font-weight:400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EF6268;
`
export const Question = styled.div`
    font-size: 25px;
    font-weight: 400;
    color:#626262;
;
    display: flex;
    align-items: center;
    padding: 0 20px;
`
export const ASurch = styled.div`

    width: 80px;
    height: 80px;
    background-image: url(${Surch});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index:3;
`