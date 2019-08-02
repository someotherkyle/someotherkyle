import { connect } from 'react-redux';
import colors from '../colors'
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

class Game {

    initializeIndex = (props) => {
        let proposedIndex
        do {
            proposedIndex = Math.random() * Math.floor(16) //hardcoded for now, will need to update w/ various board sizes
        } while (!props.occupied.includes(proposedIndex))
        return proposedIndex
    }

    convertIndexToCoords = index => {
        let coords = { x: -1, y: -1 }
        switch (index) {
            case (index >= 12):
                coords.y = 378
                let remainder = index - 12
                switch (remainder){
                    case (remainder === 0):
                        coords.x = 12
                        return coords
                    case (remainder === 1):
                        coords.x = 134
                        return coords
                    case (remainder === 2):
                        coords.x = 256
                        return coords
                    default:
                        coords.x = 378
                        return coords
                }
            
            case (index >= 8):
                coords.y = 256
                remainder = index - 8
                switch (remainder){
                    case (remainder === 0):
                        coords.x = 12
                        return coords
                    case (remainder === 1):
                        coords.x = 134
                        return coords
                    case (remainder === 2):
                        coords.x = 256
                        return coords
                    default:
                        coords.x = 378
                        return coords
                }

            case (index >= 4):
                coords.y = 134
                remainder = index - 4
                switch (remainder){
                    case (remainder === 0):
                        coords.x = 12
                        return coords
                    case (remainder === 1):
                        coords.x = 134
                        return coords
                    case (remainder === 2):
                        coords.x = 256
                        return coords
                    default:
                        coords.x = 378
                        return coords
                }

            default:
                coords.y = 12
                switch (index){
                    case 4:
                        coords.x = 378
                        return coords
                    case 3:
                        coords.x = 256
                        return coords
                    case 2:
                        coords.x = 134
                        return coords
                    default:
                        coords.x = 12
                        return coords
                }
        }
    }

    initializeValue = () => {
        let val = Math.random();
        val < .9 ? val = 2 : val = 4
        return val
    }

    draw = (coords, tileValue) => {
        let canvas = document.getElementById('tile-canvas')
        if (canvas.getContext){
            let ctx = canvas.getContext('2d')
            ctx.font = '72px sans-serif'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'

            ctx.fillStyle = colors.tileValue
            roundedRect(ctx, coords.x, coords.y, 110, 110, 10)

            
            ctx.fillText(tileValue, coords.x + 55, coords.y + 55, 110)


            
        //   playing around w/ canvas below
        //   hard coding 2 tiles
        ctx.fillStyle = colors.lightText
        roundedRect (ctx, 256, 378, 110, 110, 10)
        
        ctx.font = '72px sans-serif'
        ctx.fillStyle = colors.darkText
        ctx.fillText('2', 311, 433, 110)

        ctx.fillStyle = colors.base01
        roundedRect(ctx, 12, 134, 110, 110, 10)

        ctx.fillStyle = colors.lightText
        ctx.fillText('4', 67, 189, 110)
        }
    }


    createNewTile = () => {
        const tileIndex = this.initializeIndex
        const tileValue = this.initializeValue
        const coords = this.convertIndexToCoords(tileIndex)
        this.draw(coords, tileValue)

    }

}
const mapStateToProps = (state) => {
    return {
        occupied: this.state.occupied
    }
}
export default connect(mapStateToProps)(Game)