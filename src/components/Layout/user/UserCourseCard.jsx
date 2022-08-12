import React from "react";
import style from "../../../css/user/UserProfile.module.css"

const UserCourseCard = ({image,title,text}) =>{
    return <div>
        <div class="card" style={{margin:"5px"}}>
            <div className={style.cardimg}>
            <img src={image}/>
            </div>
            <div class="card-body">
                <h3 class={style.cardTitle}>{title}</h3>
                <p class={style.cardtext}>{text}</p>
            </div>
        </div>
    </div>
}

export default UserCourseCard