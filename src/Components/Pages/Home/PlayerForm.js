import React, { Component } from "react";
import axios from "axios";
import Results from "../Response/Results";

class PlayerForm extends Component {
    state = {
        search: "",
        playerInfo: {},
        playerName: "",
        playerTeam: ""
    };

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)

        let id = this.state.search;

        let apiUrl = " https://www.balldontlie.io/api/v1/players?search=" + id;

        axios.get(apiUrl).then(
            data => {
                console.log(data)
                console.log(data.data.data[0].id);
                console.log(data.data.data[0].team.full_name);

                let playerId = data.data.data[0].id;

                this.setState({ playerName: data.data.data[0].first_name + " " + data.data.data[0].last_name, playerTeam: data.data.data[0].team.full_name }, () => {

                    console.log(this.state.playerName)

                    let apiUrl2 = " https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + playerId;

                    axios.get(apiUrl2).then(
                        data => {
                            console.log(data.data.data[0]);
                            this.setState({
                                playerInfo: data.data.data[0]
                            }, () => { console.log(this.state.playerInfo) })
                        }
                    )

                });

            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Player Name:<br></br>
            <input type="text" name='search' value={this.state.search} onChange={this.handleChange} style={{width:"275px"}} />
                    </label><br></br>
                    <input type="submit" value="Submit" style={{backgroundColor:"none", width:"275px", border:"none", margin:"10px", borderRadius:"25px", height:"50px"}}/>
                </form>
                <Results
                    playerName={this.state.playerName}
                    playerTeam={this.state.playerTeam}
                    playerInfo={this.state.playerInfo}
                />
            </div>
        );
    }
}
export default PlayerForm;