import React, {Component} from 'react'
import { connect } from 'react-redux';
import colors from '../colors'
//import helper functions 

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath()
    ctx.moveTo(x, y + radius)
    ctx.lineTo(x, y + height - radius)
    ctx.arcTo(x, y + height, x + radius, y + height, radius)
    ctx.lineTo(x + width - radius, y + height)
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius)
    ctx.lineTo(x + width, y + radius)
    ctx.arcTo(x + width, y, x + width - radius, y, radius)
    ctx.lineTo(x + radius, y)
    ctx.arcTo(x, y, x, y + radius, radius)
    ctx.fill()
}

class TileContainer extends Component {
    componentDidMount = () => {
        
    }
    initializeIndex = (props) => {
        let proposedIndex = Math.random() * Math.floor(16) //hardcoded for now, will need to update w/ various board sizes

        //TODO: verify index availability 
        //set index to randomly generated, available index
        let availableIndex = -1 //change that <--
        this.setState({
            ...this.state,
            index: availableIndex
        })
    }

    initializeValue = () => {
        let val = Math.random();
        val < .9 ? val = 2 : val = 4
        this.setState({
            ...this.state,
            value: val
        })
    }
}
const mapStateToProps = (state) => {
    return {
        occupied: state.occupied
    }
}
export default connect(mapStateToProps)(TileContainer)