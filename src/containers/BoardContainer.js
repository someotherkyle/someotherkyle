import React, {Component} from 'react'
import Board from '../components/Board'
import BoardBlurb from '../components/BoardBlurb'
import * as game from '../game/game'
import { NavLink } from 'react-router-dom'
import * as canvas from '../game/canvas'

const eligibility = () =>{
  return  [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
  ]
}

export default class BoardContainer extends Component {
  constructor(){
    super()
    this.state = {
      boardSide: 751,
      ongoing: false,
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      score: 0,
      listenerEnabled: false,
      playerName: ''
    }
  }

  componentDidMount(){ //hard coded & will need to change if I implement various board sizes
    if (this.state.ongoing){
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
    } else {
      this.changePlayState()
      let board = this.state.board

      this.initializeGame(board)
      this.updateBoard(board)
      window.addEventListener('keypress', event => {this.handleKeyPress(event)})
    }
  }

  componentDidUpdate(){
    if (this.getBoardSide() >= 750) {
      if (this.state.boardSide !== 750){
        this.setState({ ...this.state, boardSide: 750})
      }
    } else if (this.getBoardSide() !== this.state.boardSide) {
      this.setState({ ...this.state, boardSide: this.getBoardSide()})
    }
    canvas.drawBoard(this.state.boardSide)
    canvas.drawTiles(this.state.boardSide, this.state.board)
    document.getElementById('board-div').style.height = this.state.boardSide.toString() + 'px' 
  }

  getBoardSide = () => {
    return document.getElementById('board-div').offsetWidth
  }

  toggleListener = value => {
    this.setState({ ...this.state, listenerEnabled: value })
  }

  changePlayState = () => {
    this.state.ongoing === true ? this.setState({...this.state, ongoing: false}) : this.setState({...this.state, ongoing: true})
  }

  updateBoard = board => {
    this.setState({ ...this.state, board: board })
  }

  updateScore = score => {
    this.setState({ ...this.state, score: score })
  }

  updateName = e => {
    e.preventDefault()
    this.setState({ ...this.state, playerName: e.target.value })
  }

  pushScore = game => {
    fetch('http://localhost:3001/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game: {
          player_name: game.playerName,
          score: game.score,
        }
      })
    })
  }

  handleKeyPress = e => {
    if (this.state.listenerEnabled) {
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
    this.toggleListener(true)
  }

  handleMouseOut = e => {
    this.toggleListener(false)
  }

  up = () => { 
    let board = this.state.board
    let score = this.state.score
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
    let board = this.state.board
    let score = this.state.score
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
    let board = this.state.board
    let score = this.state.score
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
    let board = this.state.board
    let score = this.state.score
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
    this.updateBoard(board)
    this.updateScore(0)

    this.initializeGame(board)

    canvas.clearGameOver()
    canvas.drawTiles(this.state.boardSide, board)
  }

  initializeGame = board => {
      let tile = game.newTile(board)
      this.state.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val

      tile = game.newTile(board)
      this.state.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val
  }

  endMove = (board, score) => {
    let tile = game.newTile(board)
    this.state.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val
    this.updateBoard(board)
    this.updateScore(score)
    canvas.drawTiles(this.state.boardSide, board)
    if (game.noMove(board)){
      canvas.drawGameOver(this.state.boardSide)
      const gameInfo = {
        score: this.state.score,
        playerName: this.state.playerName
      }
      this.pushScore(gameInfo)
    }
  } 
  
  render(){
    return(
      <div>
        <div className='board-wrapper'>
          <div className='row'>
            <input type='text' placeholder='Enter Name' onChange={e => this.updateName(e)} />
            <NavLink to='/play2048/highScores'>Score: {this.state.score}</NavLink>
          </div>
          <div className='row'>
            <div id='board-div' onMouseOver={e => this.handleMouseOver()} onMouseOut={e => this.handleMouseOut()}>
              <Board side={this.state.boardSide} />
            </div>
          </div>
          <div className='row'>
            <button onClick={e => this.resetGame(e)}>New Game</button> 
          </div>
        </div>
        <BoardBlurb />
      </div>
    )
  }
}