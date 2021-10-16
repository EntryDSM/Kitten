import styled from "styled-components"
import TeamListBackgroundImage from "../../assets/images/TeamListBackgroundImage.png"

export const TeamList = styled.div`
background-image: url(${TeamListBackgroundImage});
background-size: cover;
padding-bottom: 40px;

font-family: "bm-dohyeon";
`

export const TeamListWrapper = styled.div`
    width:1140px;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    
`

export const TeamBox = styled.div`
    
    padding-top:80px;
    align-items: center;
    display: flex;
    flex-direction: column;
    
`
export const TeamText = styled.div`
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 55px;
    font-weight: 400;
    height: 60px;
    border-bottom: 3px solid #EF6268;
    padding-bottom: 15px;
`
export const TeamItr = styled.div`
    margin-top: 20px;
    font-size: 20px;
    color: #626262;
`
export const GBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GNumText = styled.div`
    width: 300px;
    height: 80px;
    color:#EF6268;
    border-bottom: 3px solid #EF6268;
    font-size: 55px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
export const GNumItr = styled.div`
    margin-top: 20px;
    font-size: 23px;
    color: #626262;
`
export const GTeamList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1020px;
    justify-content: center;
    margin-top: 5px;
`