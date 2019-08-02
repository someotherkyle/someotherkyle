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
        const tileIndex = this.initializeIndex
        const tileValue = this.initializeValue
    }

    initializeIndex = (props) => {
        let proposedIndex
        do {
            proposedIndex = Math.random() * Math.floor(17) //hardcoded for now, will need to update w/ various board sizes
        } while (this.props.occupied.includes(proposedIndex))
        return proposedIndex
    }

    initializeValue = () => {
        let val = Math.random();
        val < .9 ? val = 2 : val = 4
        return val
    }
}
const mapStateToProps = (state) => {
    return {
        occupied: this.state.occupied
    }
}
export default connect(mapStateToProps)(TileContainer)