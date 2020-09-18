import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile ) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://specials-images.forbesimg.com/imageserve/5ed424a52259c9000769e94c/960x0.jpg?cropX1=120&cropX2=1267&cropY1=96&cropY2=668"></img>*/}
            {/*</div>*/}
            <div className = {classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
               <ProfileStatus
                   status = {props.status}
                   updateStatus = {props.updateStatus}

               />
            </div>
        </div>
    )
}

export default ProfileInfo;