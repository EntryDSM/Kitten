import styled from "styled-components";
import ModalBackground from "../../../assets/images/ModalBackground.png"
import ModalClose from "../../../assets/images/ModalClose.png";
export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:100;
    transform: translate(-50%,-50%);
    width: 75%;
    background-color: white;
    border-radius: 30px;
    background-image: url(${ModalBackground});
    background-position: center;
    background-size: cover;
    padding :70px;
    box-shadow: 0px 7px 10px 0px #00000033;
    max-height: 95%;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
    
    font-family: "bm-dohyeon";
`

export const QContentWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    justify-content: space-between;
`


export const QContentNum = styled.div`
    font-size: 30px;
    color:#FF9B9F;
    font-weight: 600;
    
`
export const QContent = styled.div`
    margin-left: 10px;
    font-size: 25px;
    font-family: "bm-dohyeon";
    display: flex;
    align-self:flex-end ;
`
export const XContent= styled.div`
    width: 40px;
    height: 40px;
    justify-self:end ;
    background-image: url(${ModalClose});
    background-position: center;
    background-size: cover;
    cursor: pointer;
`
export const ATitle = styled.div`
    font-size: 30px;
    color:#FF9B9F;
    font-weight: 600;
`
export const AContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    
`
export const AContent = styled.div`
    display: flex;
    font-size: 25px;
    margin-bottom: 60px;
    height: auto;
    >p{
        min-width: fit-content;
        max-width: 700px;
        font-size: 25px;
        word-wrap: break-word;
        
        font-family: "bm-dohyeon";
        margin: 5px 0 ;
    }
`