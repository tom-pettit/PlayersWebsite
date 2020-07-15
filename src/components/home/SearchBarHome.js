import React from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router'


class SearchBarHome extends React.Component {
    state = {
        game: '',
        appid: null
    }


    handleChange = (e) => {
        this.setState({
            game: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.history.push('/search/'+this.state.game)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{display: 'inline-block'}}>
                    <Link to={'/search/'+this.state.game} color='black' style={{color: 'rgb(33,33,33)'}}>
                        <SearchIcon style={{verticalAlign: 'middle'}}/>
                    </Link>
                    <TextField
                        onChange = {this.handleChange}
                        id="standard-full-width"
                        placeholder=""
                        width='80%'
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{fontFamily: 'Hind', display: 'inline-block',verticalAlign: 'middle'}}
                    />
                </div>
            </form>
        )
    }
}

export default withRouter(SearchBarHome)