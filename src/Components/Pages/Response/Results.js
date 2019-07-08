import React from "react";

const Results = props => (

    <div>
        <h1>{props.playerName}</h1>
        <h2>{props.playerTeam}</h2>
        {props.playerInfo.ast ? (
            <div>
                <h3>{Object.keys(props.playerInfo)[0] + `:` + props.playerInfo.games_played}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[18] + `:` + props.playerInfo.pts}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[12] + `:` + props.playerInfo.reb}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[13] + `:` + props.playerInfo.ast}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[14] + `:` + props.playerInfo.stl}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[15] + `:` + props.playerInfo.blk}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[16] + `:` + props.playerInfo.turnover}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[19] + `:` + props.playerInfo.fg_pct}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[21] + `:` + props.playerInfo.ft_pct}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{Object.keys(props.playerInfo)[20] + `:` + props.playerInfo.fg3_pct}</h3>
            </div>
        ) : (<h1></h1>)}
    </div>
)

export default Results;