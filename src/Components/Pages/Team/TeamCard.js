import React from "react";

const TeamCard =prop=>(

<div style={{display:"inline-block", margin:"10px"}}>
    <img src={prop.TeamImg} style={{height:"250px", width:"250px"}}/>

    <h2>{prop.TeamName}</h2>

</div>

);
export default TeamCard;