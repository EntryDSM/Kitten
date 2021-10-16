import * as s from "./style";
import defaultProfileImage from '../../../assets/images/DefaultProfileImg.png'

function ProfileBox({image,name,subject,github}){
    const path = image && require(`../../../assets/images/profileImage/${image}.png`);
    return (
        <s.ProfileB>
            <s.ProfileImageB href={`https://github.com/${github}`}>
                <s.ProfileImage src={image ? path?.default : defaultProfileImage}></s.ProfileImage>
            </s.ProfileImageB>
            <s.ProfileTextW>
                <s.ProfileName>{name}</s.ProfileName>
                <s.ProfileMajor>{subject}</s.ProfileMajor>
            </s.ProfileTextW>
        </s.ProfileB>
    );
}

export default ProfileBox;