import React from 'react'
import axios from 'axios'
import CountUp from 'react-countup'
import Button from '@material-ui/core/Button';
import MoreInfo from './MoreInfo'


class GameInfo extends React.Component {
    state = {
        appid: null,
        concurrent_players: null,
        show_more_info: false,
        more_info: null,
        finding_error: false
    }

    componentDidMount() {
        console.log('PROPS GAME', this.props.game)
        axios.get('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetAppList/v2/', {
            params: {
                key: '32DDDD839D24851A45BE2AA32B486FBA'
            }
        })
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
            this.setState({
                finding_error: true
            })
        } else {
    
            axios.get('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid='+this.state.appid)
            .then( res => {
            console.log('PLAYER COUNT', res.data)
            this.setState({
                concurrent_players: res.data.response.player_count
            })
            })}
    
    axios.get('https://cors-anywhere.herokuapp.com/https://steamspy.com/api.php?request=appdetails&appid='+this.state.appid)
        .then(res => {
            this.setState({
                more_info: res.data
            })
        })


    }
    )}

    MoreInfoClick = () => {
        this.setState({
            show_more_info: true
        })
    }

    LessInfoClick = () => {
        this.setState({
            show_more_info: false
        })
    }

    render() {
        var concurrent = this.state.concurrent_players
        console.log('CONCURRENT', concurrent)

        const errormsg = this.state.finding_error ? (<p><span style={{color: 'red'}}>Error</span> finding the details for this game. Please ensure that you have typed in the game's name exactly as it is spelt, with the correct capitalisation, spelling and grammar (if necessary)</p>) : null
        
        const dataObject = this.state.appid ? (
            <div>
                <div class="row">
                    <div class="col s6" style={{paddingLeft: '0'}}>
                    <div class="card blue-grey darken-1">
                        <div class="card-content red">
                            <h1 style={{color: '#3ab4c9', fontSize: 80, marginTop: 0}}><CountUp style={{fontFamily: 'Hind', fontWeight:'bold'}} end={concurrent} duration={2}/></h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                {errormsg}
            </div>
        )

        const error = this.state.finding_error ? errormsg : (
            <div className='container'>
                <div>{dataObject}</div>
                    {this.state.show_more_info ?  <Button variant="outlined" style={{fontFamily: 'Hind'}} onClick={this.LessInfoClick}>Less Info</Button> : <Button variant="outlined" style={{fontFamily: 'Hind'}} onClick={this.MoreInfoClick}>More Info</Button>}
                    {this.state.show_more_info ? <MoreInfo more_info={this.state.more_info}/> : null}

            </div>
        )

        return(
            <div>
                {error}
            </div>
        )
    }
}

export default GameInfo