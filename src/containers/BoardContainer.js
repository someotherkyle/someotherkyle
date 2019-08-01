import React, {Component} from 'react'
//import TileContainer from './TileContainer'

export default class BoardContainer extends Component {
    constructor(){
        super()
        this.state = {
            occupied: []
        }
    }

    componentDidMount(){}
/*each game begins w/ 2 tiles... convert to redux and figure out how to display correctly
pass occupied array as prop & update w/ callback? what about redux?

        <Component occupied={this.state.occupied} />
        <Component occupied={this.state.occupied} />

        maybe move empty divs to state */

    render(){
        return(
            <div className='gameBoard'>
            </div>
        )
    }
}

