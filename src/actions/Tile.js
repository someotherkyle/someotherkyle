import { connect } from 'react-redux';
import colors from '../colors'
import uuid from 'uuid'
//import helper functions 
//this is not a true Component...

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

let occupied = []

class Tile {
    constructor(){
        this.state = {
            id: uuid,
            index: this.initializeIndex(),
            value: this.initializeValue()
        }
    }

    initializeIndex = (props) => {
        let proposedIndex
        do {
            proposedIndex = parseInt(Math.random() * Math.floor(16)) //hardcoded for now, will need to update w/ various board sizes
        } while (occupied.includes(proposedIndex)) //CHANGE THIS BACK TO PROP ONCE I FIGURE THIS ISH OUT
        occupied.push(proposedIndex)
        return proposedIndex
    }

    initializeValue = () => {
        let val = Math.random();
        val < .9 ? val = 2 : val = 4
        return val
    }

    convertIndexToCoords = index => {
        let coords = { x: -1, y: -1 }
        switch (index) {
            case 1:
                coords = { x: 134, y: 12 }
                return coords
            
            case 2:
                coords = { x: 256, y: 12 }
                return coords

            case 3:
                coords = { x: 378, y: 12 }
                return coords
            
            case 4:
                coords = { x: 12, y: 134 }
                return coords
            
            case 5:
                coords = { x: 134, y: 134 }
                return coords

            case 6:
                coords = { x: 256, y: 134 }
                return coords
            
            case 7:
                coords = { x: 378, y: 134 }
                return coords
            
            case 8:
                coords = { x: 12, y: 256 }
                return coords

            case 9:
                coords = { x: 134, y: 256 }
                return coords
            
            case 10:
                coords = { x: 256, y: 256 }
                return coords
            
            case 11:
                coords = { x: 378, y: 256 }
                return coords

            case 12:
                coords = { x: 12, y: 378 }
                return coords

            case 13:
                coords = { x: 134, y: 378 }
                return coords
            
            case 14:
                coords = { x: 256, y: 378 }
                return coords

            case 15:
                coords = { x: 378, y: 378 }
                return coords

            default: 
                coords = { x: 12, y: 12 }
                return coords
        }
    }

    draw = () => {
        let canvas = document.getElementById('tile-canvas')
        const coords = this.convertIndexToCoords(this.state.index)
        const tileColor = "tile" + this.state.value.toString()
        const textColor = "text" + this.state.value.toString()
        if (canvas.getContext){
            let ctx = canvas.getContext('2d')
            ctx.font = '72px sans-serif'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            
            ctx.fillStyle = colors[tileColor]
            roundedRect(ctx, coords.x, coords.y, 110, 110, 10)

            ctx.fillStyle = colors[textColor]
            ctx.fillText(this.state.value, coords.x + 55, coords.y + 55, 110)
        }
    }
}

/* const mapStateToProps = (state) => {
    return {
        occupied: this.state.occupied
    }
}
export default connect(mapStateToProps)(Tile) */
export default Tile