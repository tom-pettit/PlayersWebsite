import React from 'react'
import axios from 'axios'
import CountUp from 'react-countup'

class GameInfo extends React.Component {
    state = {
        appid: null,
        concurrent_players: null
    }

    componentDidMount() {
        console.log('PROPS GAME', this.props.game)
        axios.get('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetAppList/v2/')
        .then( res => {
        console.log('AXIOS', res.data.applist.apps)
        var i = null
        var applist = res.data.applist.apps
        for (i = 0; i < applist.length; i++) {
            if (applist[i].name === this.props.game) {
                console.log('FOUND', applist[i].appid)
                this.setState({
                    appid: applist[i].appid
                })
                break
            }
        }

        if (this.state.appid === null) {
            console.log('not found in records')
        } else {
    
            axios.get('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid='+this.state.appid)
            .then( res => {
            console.log('PLAYER COUNT', res.data)
            this.setState({
                concurrent_players: res.data.response.player_count
            })
            })}
    })}

    render() {
        var concurrent = this.state.concurrent_players
        console.log('CONCURRENT', concurrent)
        
        const dataObject = this.state.appid ? (
            <div>
                <div class="row">
                    <div class="col s6" style={{paddingLeft: '0'}}>
                    <div class="card blue-grey darken-1">
                        <div class="card-content red">
                            <h1 style={{color: 'blue', fontSize: 80, marginTop: 0}}><CountUp end={concurrent} duration={2}/></h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <p>Loading data...</p>
            </div>
        )

        return(
            <div className='container'>
                <div>{dataObject}</div>
                <p style={{color: '#979dac', fontWeight: 'bold'}}>If loading data appears for a while then this could be because the game was not found in our records. Please ensure capitaalisation and grammar are correct!</p>
            </div>
        )
    }
}

export default GameInfo