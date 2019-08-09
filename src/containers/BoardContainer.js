import React, {Component} from 'react'
import Board from '../components/Board'
import { connect } from 'react-redux'
import * as game from '../game/game'
import { NavLink } from 'react-router-dom'
import { updateBoard, updateScore, setName, changePlayState, toggleListener, updateName } from '../redux/actions/gameActions'
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

    canvas.clearGameOver()
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
      <div>
        <div className='board-wrapper'>
          <input type='text' placeholder='Enter Name' onChange={e => this.props.updateName(e.target.value)} />
          <NavLink to='/playdiscount2048/highScores'>Score: {this.props.game.score}</NavLink>
          <div onMouseOver={e => this.handleMouseOver()} onMouseOut={e => this.handleMouseOut()}>
            <Board />
          </div>
          <button onClick={e => this.resetGame(e)}>New Game</button> 
        </div>
        <div className="project-details">
          <h3><a href="http://2048game.com">2048</a> Tribute</h3>
          <p>The aim of 2048 is to combine tiles with the same value until you create a 2048 tile. How high can you go? Replace 'Enter Name' with your name to claim your high score. 
            Click on the score to view all high scores. I would like to point out that I <strong><em>DID NOT</em></strong> come up with this game or its rules. I simply challenged myself to reproduce 
            it for my final project at <a href="https://flatironschool.com">Flatiron School</a>.</p>
          <p>To graduate, I had to create a project that could be anything I wanted. Strugging to find something I was interested in, I started playing <a href="http://2048game.com">2048</a> 
            on my phone to pass some time and here we are. I struggled early with this project and I noticed that trend with most of the projects at Flatiron. I suspect it is the lack of a defined 
            goal that makes it tricky to begin. How can you get somewhere if you don't know where somewhere is? At this point, I had an okay idea of what I had hoped to accomplish but 
            really wasn't too sure how to go about it. Couple that with the fact that I've never made a game this complicated before and I was struggling...</p>
          <p>Now that its done, I'm very glad that I chose to challenge myself with this project versus simply aiming for completion. I was able to learn about the canvas API and am excited
            to explore its capabilities. I leaned very heavily on Redux for state management and was forced to really gain an understanding of both how it works as well as when you may not
            want to utilize it. All in all, I'm pretty pleased with how it turned out and have a few things I'd still like to implement.
          </p>
          <p>I still hope to add animations to this game and explore requestAnimationFrame(). I would also like to add other board sizes ( 3x3, 5x5, etc [<strong><em>also not my idea</em></strong>]).
            Thanks for checking out my project! You're welcome to take a look at the <a href="https://github.com/someotherkyle/2048-react-front">source</a>.</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { updateBoard, updateScore, setName, changePlayState, toggleListener , pushScore, updateName })(BoardContainer)