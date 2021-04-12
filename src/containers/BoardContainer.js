import React, {Component} from 'react'
import Board from '../components/Board'
import BoardBlurb from '../components/BoardBlurb'
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
  constructor(props)  {
    super(props)
    this.state = {
      boardSide: 750
    }
    this.startX = null
    this.startY = null
  }

  handleKeyDown = e => {
    if (this.props.game.listenerEnabled) {
      e.preventDefault()
      switch (e.keyCode) {
        case 87: 
        case 75:
        case 38:
          this.up()
          break
        case 83:
        case 74:
        case 40:
          this.down()
          break
        case 65:
        case 72:
        case 37:
          this.left()
          break
        case 68:
        case 76:
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

  handleTouchStart = e => {
    e.preventDefault()
    const t = e.touches[0]

    this.startX = t.screenX
    this.startY = t.screenY
  }

  handleTouchMove = e => {
    e.preventDefault()
    if (!this.startX || !this.startY) {
      return
    }


    const t = e.touches[0]
    const endX = t.screenX
    const endY = t.screenY

    const diffX = this.startX - endX
    const diffY = this.startY - endY
    const minimumChange = 5
    if (Math.abs(diffX) > minimumChange || Math.abs(diffY) > minimumChange) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        diffX > 0 ? this.left() : this.right()
      } else {
        diffY > 0 ? this.up() : this.down()
      }
    }
    this.startX = null
    this.startY = null
  }

  up = () => { 
    let board = this.props.game.board
    let score = this.props.game.score
    let eligible = eligibility()
    if (!game.canMoveUp(board)) {
      return false
    }
    for (let x = 0; x < 4; x++) {
      for (let y = 1; y < 4; y++) {
        if (board[x][y] !== 0) {
          for(let y1 = 0; y1 < y; y1++) {
            if (board[x][y1] === 0) {
              board[x][y1] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x][y1] && game.clearShotVert(x, y1, y, board) && eligible[x][y1]) {
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
    if (!game.canMoveDown(board)) {
      return false
    }
    for (let x = 0; x < 4; x++) {
      for (let y = 2; y >= 0; y--) {
        if (board[x][y] !== 0) {
          for(let y1 = 3; y1 > y; y1--) {
            if (board[x][y1] === 0) {
              board[x][y1] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x][y1] && game.clearShotVert(x, y, y1, board) && eligible[x][y1]) {
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
    if (!game.canMoveLeft(board)) {
      return false
    }
    for (let y = 0; y < 4; y++) {
      for (let x = 1; x < 4; x++) {
        if (board[x][y] !== 0) {
          for(let x1 = 0; x1 < x; x1++) {
            if (board[x1][y] === 0) {
              board[x1][y] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x1][y] && game.clearShotHoriz(y, x1, x, board) && eligible[x1][y]) {
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
    if (!game.canMoveRight(board)) {
      return false
    }
    for (let y = 0; y < 4; y++) {
      for (let x = 2; x >= 0; x--) {
        if (board[x][y] !== 0) {
          for(let x1 = 3; x1 > x; x1--) {
            if (board[x1][y] === 0) {
              board[x1][y] = board[x][y]
              board[x][y] = 0
              break
            } else if (board[x][y] === board[x1][y] && game.clearShotHoriz(y, x, x1, board) && eligible[x1][y]) {
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

    canvas.clearGameOver(this.state.boardSide)
  }

  initializeGame = board => {
      let tile = game.newTile(board)
      this.props.game.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val

      tile = game.newTile(board)
      this.props.game.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val
  }

  endMove = (board, score) => {
    let tile = game.newTile(board)
    this.props.game.playerName === 'amu' ? board[tile.x][tile.y] = 4 : board[tile.x][tile.y] = tile.val
    this.props.updateBoard(board)
    this.props.updateScore(score)
    if (game.noMove(board)) {
      canvas.drawGameOver(this.state.boardSide)
      const gameInfo = {
        score: this.props.game.score,
        playerName: this.props.game.playerName
      }
      this.props.pushScore(gameInfo)
    }
  } 

  componentDidMount() { //hard coded & will need to change if I implement various board sizes
    if (this.props.game.ongoing) {
      window.addEventListener('keydown', event => {this.handleKeyDown(event)})
    } else {
      this.props.changePlayState()
      let board = this.props.game.board

      this.initializeGame(board)
      this.props.updateBoard(board)

      window.addEventListener('keydown', event => {this.handleKeyDown(event)})
    }
  }

  getBoardSide = () => {
    return document.getElementById('board-div').offsetWidth
  }

  componentDidUpdate() {
    if (this.getBoardSide() >= 750) {
      if (this.state.boardSide !== 750) {
        this.setState({ boardSide: 750 })
      }
    } else if (this.getBoardSide() !== this.state.boardSide) {
      this.setState({ ...this.state, boardSide: this.getBoardSide()})
    }
    canvas.drawBoard(this.state.boardSide)
    canvas.drawTiles(this.state.boardSide, this.props.game.board)
    document.getElementById('board-div').style.height = this.state.boardSide.toString() + 'px' 
  }
  
  render() {
    return(
      <div>
        <div className='board-wrapper'>
          <div className='game-input'>
            <input type='text' placeholder='Enter Name' onChange={e => this.props.updateName(e.target.value)} />
          </div>
          <div className='game-score'>
            <NavLink to='/play2048/highScores'>Score: {this.props.game.score}</NavLink>
          </div>
          <div id='board-div' onTouchStart={e => this.handleTouchStart(e)} onTouchMove={e => this.handleTouchMove(e)} onMouseOver={e => this.handleMouseOver()} onMouseOut={e => this.handleMouseOut()}>
            <Board side={this.state.boardSide} />
          </div>
          <div className='new-game'>
            <button onClick={e => this.resetGame(e)}>New Game</button> 
          </div>
        </div>
        <BoardBlurb />
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
