import * as s from "./style"

function QnaModal ({setQnaModal,qnaList}){
    console.log(setQnaModal,qnaList)
    const ansMan = ["이서준","김혜준","전규현","이승윤"]
    return(
       
        <s.ModalWrapper>
        <s.QContentWrapper>
                <div style={{display:"flex"}}>
                <s.QContentNum>Q{qnaList.qId}.</s.QContentNum>
                <s.QContent>{qnaList.question}</s.QContent>
                </div>
                <s.XContent onClick={()=>{
                    setQnaModal({
                        aId:qnaList.qId,
                        isModal:false 
                    })
                }}></s.XContent>
        </s.QContentWrapper>
        <div style={{display:"flex"}}>
            <s.ATitle>A{qnaList.qId}.</s.ATitle>
            <s.AContentWrapper>
                {qnaList.Acontent.map((props,index )=>(
                    <s.AContent key={index}>
                        <p>{ansMan[index]}:</p>
                        <p>{props}</p>
                    </s.AContent>
                ))}
                
            </s.AContentWrapper>
        </div>
        </s.ModalWrapper>
);
}

export default QnaModal;