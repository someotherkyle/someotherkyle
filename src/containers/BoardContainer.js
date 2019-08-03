import React, {Component} from 'react'
import Board from '../components/Board'
import colors from '../colors'
// import { connect } from 'react-redux'
import { roundedRect } from '../actions/canvas'
import Game from '../actions/Game'

export default class BoardContainer extends Component {
    componentDidMount(){ //hard coded & will need to change if I implement various board sizes
        let canvas = document.getElementById('board')
        if (canvas.getContext){
            let ctx = canvas.getContext('2d')
            ctx.fillStyle = colors.boardBackground
            roundedRect(ctx, 0, 0, 500, 500, 5)

            let a = 12
            for (let i = 0; i <= 4; i++){
                let b = 12
                for (let j = 0; j <=4; j++){
                    ctx.fillStyle = colors.emptyTileBackground
                    roundedRect(ctx, a, b, 110, 110, 5)
                    b += 122
                }
                a += 122
            }
        }
        const game = new Game()
        window.addEventListener('keypress', event => {this.handleKeyPress(event, game)})
        game.start()
    }

    handleKeyPress = (e, game) => {
        e.preventDefault()
        if (e.key === 'a' || e.key === 'h'){
            console.log('left')
            game.left()
        } else if (e.key === 'd' || e.key === 'l'){
            console.log('right')
            game.right()
        } else if (e.key === 's' || e.key === 'j'){
            console.log('down')
            game.down()
        } else if (e.key === 'w' || e.key === 'k'){
            console.log('up')
            game.up()
        } else {
            return console.log(e.key)
        }
    }

    render(){
        return(
            <Board />
        )
    }
}

/* const mapStateToProps = state => {
    return {
        tiles: state.tiles 
    }
}

export default connect(mapStateToProps)(BoardContainer) */