import * as s from "./style";
import ProfileBox from "./profileBox/ProfileBox";
function TeamList() {
    const TeamList3 =[
        {
            image:null,
            name:"김대웅",
            subject:"Backend"
        },{
            image:"3-1",
            name:"임용성",
            subject:"Backend"
        },{
            image:"3-2",
            name:"정우영",
            subject:"Backend"
        },{
            image:"3-3",
            name:"이우찬",
            subject:"Frontend"
        },{
            image:null,
            name:"오준상",
            subject:"Frontend"
        }
    ] 
    const TeamList2=[
        {
            image:"2-1",
            name:"김혜준",
            subject:"Frontend"
        },{
            image:"2-2",
            name:"전규현",
            subject:"Frontend"
        },{
            image:"2-3",
            name:"임서영",
            subject:"Designer"
        },{
            image:"2-4",
            name:"이서준",
            subject:"Backend"
        },{
            image:"2-5",
            name:"이승윤",
            subject:"Backend"
        }
    ]
    const TeamList1 = [
        {
            image:"1-1",
            name:"김범진",
            subject:"Backend"
        },{
            image:null,
            name:"이준서",
            subject:"Backend"
        },{
            image:null,
            name:"오상우",
            subject:"Backend"
        },{
            image:null,
            name:"정대현",
            subject:"Backend"
        },{
            image:null,
            name:"강석현",
            subject:"Frontend"
        },{
            image:null,
            name:"김의찬",
            subject:"Frontend"
        },{
            image:null,
            name:"이경수",
            subject:"Frontend"
        },{
            image:null,
            name:"조상현",
            subject:"Frontend"
        },{
            image:null,
            name:"손지원",
            subject:"Designer"
        }
    ]
  return (
    <s.TeamList id="team">
      <s.TeamListWrapper>
        <s.TeamBox>
          <s.TeamText>TEAM</s.TeamText>
          <s.TeamItr>
            EntryDSM의 발전과 새로운 이야기를 만드는 사람들 입니다.
          </s.TeamItr>
        </s.TeamBox>
        <s.GBox>
          <s.GNumText>3학년</s.GNumText>
          <s.GNumItr>존경스러운 Entry의 3학년들 입니다.</s.GNumItr>
          <s.GTeamList>
              {TeamList3.map((props,i)=>(
                  <ProfileBox key={i} image={props.image} name={props.name} subject={props.subject}></ProfileBox>
              ))}
          </s.GTeamList>
        </s.GBox>

        <s.GBox>
          <s.GNumText>2학년</s.GNumText>
          <s.GNumItr>자랑스러운 Entry의 2학년들 입니다.</s.GNumItr>
          <s.GTeamList>
              {TeamList2.map((props,i)=>(
                  <ProfileBox key={i} image={props.image} name={props.name} subject={props.subject}></ProfileBox>
              ))}
          </s.GTeamList>
        </s.GBox>
        <s.GBox>
          <s.GNumText>1학년</s.GNumText>
          <s.GNumItr>미래가 기대되는 Entry의 1학년들 입니다.</s.GNumItr>
          <s.GTeamList>
              {TeamList1.map((props,i)=>(
                  <ProfileBox key={i} image={props.image} name={props.name} subject={props.subject}></ProfileBox>
              ))}
          </s.GTeamList>
        </s.GBox>
        
      </s.TeamListWrapper>
    </s.TeamList>
  );
}

export default TeamList;
