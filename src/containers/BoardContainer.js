import React, {Component} from 'react'
import Board from '../components/Board'
import { connect } from 'react-redux'
import * as game from '../game/game'
import { updateBoard, updateScore, setName } from '../redux/actions/gameActions'
import * as canvas from '../game/canvas'

class BoardContainer extends Component {
  handleKeyPress = (e) => {
    e.preventDefault()
    switch (e.keyCode) {
      case 119: 
      case 107:
      case 38:
        this.props.game.up()
        this.props.updateBoard(this.props.game.board)
        this.props.updateScore(this.props.game.score)
        if (game.noMove(this.props.game.board)) {
          this.props.game.end()
        }
        break
      case 115:
      case 106:
      case 40:
        this.props.game.down()
        this.props.updateBoard(this.props.game.board)
        this.props.updateScore(this.props.game.score)
        if (game.noMove(this.props.game.board)) {
          this.props.game.end()
        }
        break
      case 97:
      case 104:
      case 37:
        this.props.game.left()
        this.props.updateBoard(this.props.game.board)
        this.props.updateScore(this.props.game.score)
        if (game.noMove(this.props.game.board)) {
          this.props.game.end()
        }
        break
      case 100:
      case 108:
      case 39:
        this.props.game.right()
        this.props.updateBoard(this.props.game.board)
        this.props.updateScore(this.props.game.score)
        if (game.noMove(this.props.game.board)) {
          this.props.game.end()
        }
        break
      default:
        break
    }
  }

  componentDidMount = () => { //hard coded & will need to change if I implement various board sizes
    canvas.drawBoard()
    if (this.props.game.ongoing){
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})

    } else {

    }
/*         const this.props.game.= new Game()
        this.props.game.start()
        this.props.updateBoard(this.props.game.board) */
  }
  
    componentDidUpdate = () => {
      this.props.updateBoard(this.props.game.board)
    }


  render(){
    return(
      <Board />
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { updateBoard, updateScore, setName })(BoardContainer)