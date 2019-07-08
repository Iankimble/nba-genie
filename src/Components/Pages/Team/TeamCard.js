import React from "react";

const TeamCard =prop=>(

<div>
    <img src={prop.TeamImg}/>

    <h2>{prop.TeamName}</h2>

</div>

);
export default TeamCard;