import React, {Component} from 'react'
import Board from '../components/Board'
//import TileContainer from './TileContainer'
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

export default class BoardContainer extends Component {
    constructor(){
        super()
        this.state = {
            occupied: []
        }
    }


    componentDidMount(){
        let canvas = document.getElementById('board')
        if (canvas.getContext){
            let ctx = canvas.getContext('2d')

            ctx.fillStyle = 'rgb(7, 54, 66)'
            ctx.fillRect(0, 0, 500, 500)

            let a = 12
            for (let i = 0; i <= 4; i++){
                let b = 12
                for (let j = 0; j <=4; j++){
                    ctx.fillStyle = 'rgb(131, 148, 150)'
                    roundedRect(ctx, a, b, 110, 110, 10)
                    b += 122
                }
                a += 122
            }
        }
    }
/*each game begins w/ 2 tiles... convert to redux and figure out how to display correctly
pass occupied array as prop & update w/ callback? what about redux?

        <Component occupied={this.state.occupied} />
        <Component occupied={this.state.occupied} />

        maybe move empty divs to state */

    render(){
        return(
            <Board />
        )
    }
}

