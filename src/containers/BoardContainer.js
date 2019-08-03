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
        game.start()

    }

    handleKeyPress = e => {
        e.preventDefault()
        console.log(e.value)
    }

    render(){
        return(
            <div onKeyPress={this.handleKeyPress}>
                <Board />
            </div>
        )
    }
}

/* const mapStateToProps = state => {
    return {
        tiles: state.tiles 
    }
}

export default connect(mapStateToProps)(BoardContainer) */