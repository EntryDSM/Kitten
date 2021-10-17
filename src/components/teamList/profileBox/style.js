import styled from "styled-components";

export const ProfileB = styled.div`
    width: 300px;
    height: 90px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin: 15px;
    font-family: "bm-dohyeon";
` 

export const ProfileImageB = styled.a`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 3px solid #FF9B9F;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    z-index:3;
    &:hover{
        & img{
            filter: opacity(25%);
        }
        &::after{
            position: absolute;
            content: "github";
            color: black;
        } 
    }
`


export const ProfileImage = styled.img`
    z-index:0;
    background-position: center;
    background-size: contain;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    
`

export const ProfileTextW = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
`
export const ProfileName = styled.div`
    border-bottom: 3px solid rgba(58, 58, 58, 0.29);
    font-weight: 400;
    padding: 0 8px;
    font-size: 25px;
`
export const ProfileMajor = styled.div`
    height: 40px;
    font-weight: 400;
    color:#F57278;
    padding: 0 8px;
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
`