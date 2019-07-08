import React from  "react";

import PlayerForm from "./PlayerForm";
import TeamButton from  "./Button/TeamButton";

const Main= ()=>(
<div>
      <img src={require("../../Images/TeamImages/6erLogo.png")} style={{height:"350px", width:"300px"}}/>
<PlayerForm /><br></br>
      <TeamButton/>
</div>
)

export default Main;