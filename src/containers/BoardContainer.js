import React, {Component} from 'react'
import Board from '../components/Board'
import { connect } from 'react-redux'
import * as game from '../game/game'
import { NavLink } from 'react-router-dom'
import { updateBoard, updateScore, setName, changePlayState, enableListener, toggleListener, updateName } from '../redux/actions/gameActions'
import { pushScore } from '../redux/actions/scoresActions'
import * as canvas from '../game/canvas'

const eligibility = () =>{
  return  [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
  ]
}

class BoardContainer extends Component {
  handleKeyPress = e => {
    if (this.props.game.listenerEnabled) {
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
  }
  
  handleMouseOver = e => {
    this.props.toggleListener(true)
  }

  handleMouseOut = e => {
    this.props.toggleListener(false)
  }

  up = () => { 
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility()
    if (!game.canMoveUp(board)){
      return false
    }
    for (let x = 0; x < 4; x++){
      for (let y = 1; y < 4; y++){
        if (board[x][y] !== 0){
          for(let y1 = 0; y1 < y; y1++){
            if (board[x][y1] === 0){
              board[x][y1] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x][y1] && game.clearShotVert(x, y1, y, board) && eligible[x][y1]){
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
    this.endMove(board, score)
  }

  down = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility()
    if (!game.canMoveDown(board)){
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
            } else if (board[x][y] === board[x][y1] && game.clearShotVert(x, y, y1, board) && eligible[x][y1]){
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
    this.endMove(board, score)
  }

  left = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility()
    if (!game.canMoveLeft(board)){
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
            } else if (board[x][y] === board[x1][y] && game.clearShotHoriz(y, x1, x, board) && eligible[x1][y]){
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
    this.endMove(board, score)
  }

  right = () => {
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility()
    if (!game.canMoveRight(board)){
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
            } else if (board[x][y] === board[x1][y] && game.clearShotHoriz(y, x, x1, board) && eligible[x1][y]){
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
    this.endMove(board, score)
  }

  resetGame = e => {
    e.preventDefault()
    const board = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    this.props.updateBoard(board)
    this.props.updateScore(0)

    this.initializeGame(board)

    canvas.drawTiles(board)
  }

  initializeGame = board => {
      let tile = game.newTile(board)
      board[tile.x][tile.y] = tile.val

      tile = game.newTile(board)
      board[tile.x][tile.y] = tile.val
  }

  endMove = (board, score) => {
    let tile = game.newTile(board)
    board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    canvas.drawTiles(board)
    if (game.noMove(board)){
      canvas.drawGameOver()
      const gameInfo = {
        score: this.props.game.score,
        playerName: this.props.game.playerName
      }
      this.props.pushScore(gameInfo)
    }
  } 

  componentDidMount = () => { //hard coded & will need to change if I implement various board sizes
    canvas.drawBoard()
    if (this.props.game.ongoing){
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
      canvas.drawTiles(this.props.game.board)
    } else {
      this.props.changePlayState()
      let board = this.props.game.board

      this.initializeGame(board)

      this.props.updateBoard(board)
      canvas.drawTiles(this.props.game.board)
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
    }
  }
  
  render(){
    return(
      <div className='board-wrapper'>
        <button onClick={e => this.resetGame(e)}>New Game</button> 
        <input type='text' value={this.props.game.playerName} onChange={e => this.props.updateName(e.target.value)} />
        <NavLink to='/highScores'>High Scores</NavLink>
        <div onMouseOver={e => this.handleMouseOver()} onMouseOut={e => this.handleMouseOut()}>
          <Board />
        </div>
        <p>Score: {this.props.game.score}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { updateBoard, updateScore, setName, changePlayState, enableListener, toggleListener , pushScore, updateName })(BoardContainer)