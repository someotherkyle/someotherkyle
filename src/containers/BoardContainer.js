import React, {Component} from 'react'
import Board from '../components/Board'
import { connect } from 'react-redux'
import { canMoveUp, canMoveDown, canMoveRight, canMoveLeft, clearShotVert, clearShotHoriz, newTile } from '../game/game'
import { updateBoard, updateScore, setName, changePlayState } from '../redux/actions/gameActions'
import * as canvas from '../game/canvas'

const eligibility = [
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true]
]

class BoardContainer extends Component {
  handleKeyPress = (e) => {
    e.preventDefault()
    switch (e.keyCode) {
      case 119: 
      case 107:
      case 38:
        this.up()
        break
      case 115:
      case 106:
      case 40:
        this.down()
        break
      case 97:
      case 104:
      case 37:
        this.left()
        break
      case 100:
      case 108:
      case 39:
        this.right()
        break
      default:
        break
    }
  }
  
  up = () => { 
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility
    if (!canMoveUp(board)){
      return false
    }
    for (let x = 0; x < 4; x++){
      for (let y = 1; y < 4; y++){
        if (board[x][y] !== 0){
          for(let y1 = 0; y1 < y; y1++){
            if (board[x][y1] === 0){
              board[x][y1] = board[x][y]
              this.board[x][y] = 0
              break
            } else if (board[x][y] === board[x][y1] && clearShotVert(x, y1, y, board) && eligible[x][y1]){
              board[x][y1] += board[x][y]
              eligible[x][y1] = false
              score += this.board[x][y1]
              board[x][y] = 0
              break
            }
          }
        }
      }
    }
    let tile = newTile(board)
    board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    canvas.drawTiles(board)
  }

  down = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility
    if (!canMoveDown(board)){
      return false
    }
    for (let x = 0; x < 4; x++){
      for (let y = 2; y >= 0; y--){
        if (board[x][y] !== 0){
          for(let y1 = 3; y1 > y; y1--){
            if (board[x][y1] === 0){
              board[x][y1] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x][y1] && clearShotVert(x, y, y1, board) && eligible[x][y1]){
              board[x][y1] += board[x][y]
              eligible[x][y1] = false
              score += board[x][y1]
              board[x][y] = 0
              break
            }
          }
        }
      }
    }
    let tile = newTile(board)
    board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    canvas.drawTiles(board)
  }

  left = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility
    if (!canMoveLeft(board)){
      return false
    }
    for (let y = 0; y < 4; y++){
      for (let x = 1; x < 4; x++){
        if (board[x][y] !== 0){
          for(let x1 = 0; x1 < x; x1++){
            if (board[x1][y] === 0){
              board[x1][y] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x1][y] && clearShotHoriz(y, x1, x, board) && eligible[x1][y]){
              board[x1][y] += board[x][y]
              eligible[x1][y] = false
              score += board[x1][y]
              board[x][y] = 0
              break
            }
          }
        }
      }
    }
    let tile = newTile(board)
    board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    canvas.drawTiles(board)
  }

  right = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility
    if (!canMoveRight(board)){
      return false
    }
    for (let y = 0; y < 4; y++){
      for (let x = 2; x >= 0; x--){
        if (board[x][y] !== 0){
          for(let x1 = 3; x1 > x; x1--){
            if (board[x1][y] === 0){
              board[x1][y] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x1][y] && clearShotHoriz(y, x, x1, board) && eligible[x1][y]){
              board[x1][y] += board[x][y]
              eligible[x1][y] = false
              score += board[x1][y]
              board[x][y] = 0
              break
            }
          }
        }
      }
    }
    let tile = newTile(board)
    board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    canvas.drawTiles(board)
  }

  componentDidMount = () => { //hard coded & will need to change if I implement various board sizes
    canvas.drawBoard()
    if (this.props.game.ongoing){
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
      canvas.drawTiles(this.props.game.board)
    } else {
      this.props.changePlayState()
      let board = this.props.game.board

      let tile = newTile(board)
      board[tile.x][tile.y] = tile.val

      tile = newTile(board)
      board[tile.x][tile.y] = tile.val

      this.props.updateBoard(board)
      canvas.drawTiles(this.props.game.board)
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
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
    game: state.game
  }
}

export default connect(mapStateToProps, { updateBoard, updateScore, setName, changePlayState })(BoardContainer)