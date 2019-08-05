import React, {Component} from 'react'
import Board from '../components/Board'
import colors from '../colors'
import { connect } from 'react-redux'
import { roundedRect } from '../game/canvas'
import Game from '../game/Game'
import { updateBoard, updateScore } from '../actions/gameActionCreator'
import { noMove } from '../game/GameHelpers'

class BoardContainer extends Component {
    componentDidMount(){ //hard coded & will need to change if I implement various board sizes
        let canvas = document.getElementById('game-board')
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
        switch (e.keyCode) {
            case 119: 
            case 107:
            case 38:
                game.up()
                this.props.updateBoard(game.board)
                this.props.updateScore(game.score)
                noMove(game.board)
                break
            case 115:
            case 106:
            case 40:
                game.down()
                this.props.updateBoard(game.board)
                this.props.updateScore(game.score)
                noMove(game.board)
                break
            case 97:
            case 104:
            case 37:
                game.left()
                this.props.updateBoard(game.board)
                this.props.updateScore(game.score)
                noMove(game.board)
                break
            case 100:
            case 108:
            case 39:
                game.right()
                this.props.updateBoard(game.board)
                this.props.updateScore(game.score)
                noMove(game.board)
                break
            default:
                break
        }
    }

    render(){
        return(
            <Board />
        )
    }
}

const mapStateToProps = state => {
    return {
        board: state.board 
    }
}

export default connect(mapStateToProps, { updateBoard, updateScore })(BoardContainer)