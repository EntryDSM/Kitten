import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
  margin:0px;
  padding:0px;
    width: 100%;
    height: 970px;
    background-image: url(${(props) => props.img});
    background-repeat : no-repeat;
    background-size : cover;
    padding-top: 80px;
  `,

  Wrapper: styled.div`
    margin: 0 auto;
    padding: 0px;
    width: 1280px;
    height: 860px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

  `,

  SlideWrapper: styled.div`
    margin: 0px;
    padding: 0px;
    width: 800px;
    height: 545px;
    #Rarrow {
      width: 55px;
      position: absolute;
      z-index: 3;
      margin-left:670px;
      margin-top:230px;
    }
    #Larrow {
      width: 55px;
      position: absolute;
      z-index: 3;
      margin-left:70px;
      margin-top:230px;
    }
  `,

  Slides: styled.div`
    z-index: 2;
    position: absolute;
    transition: 0.5s;
    width: 400px;
    height: 545px;
    background-color: rgba(178, 178, 178, 0.5);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    visibility: visible;
    .img {
      width: calc(101.5% + 1px);
      position: absolute;
      top: 133px;
      right: -4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      pointer-events: none;
    }
  `,

  Year: styled.span`
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-family: "Do Hyeon";
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    line-height: 49px;
    left: 47px;
    top: 34px;
  `,

  Line1: styled.div`
    position: absolute;
    width: 133px;
    border-bottom: 2px solid black;
    left: 27px;
    top: 81px;
  `,

  Page: styled.p`
    font-family: "Hanna", sans-serif;
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0.15em;
    text-align: left;
    left: 66px;
    top: 90px;
  `,

  Info: styled.p`
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-family: "Noto Sans KR";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    bottom: 63px;
    width: 344px;
    height: 211px;
    left: 29px;
  `,

  LWrapper: styled.div`    
  `,

  Title: styled.p`
    height:70px;
    margin: 0px;
    padding: 0px;
    top: 340px;
    font-family: "Do Hyeon";
    font-size: 65px;
  `,

  Line2: styled.div`
    
    border-bottom: 4px solid #ef6268;
    width: 340px;
  `,

  Desc: styled.p`

    margin: 0px;
    padding: 0px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #585858;
    line-height: 30px;
  `,
};
