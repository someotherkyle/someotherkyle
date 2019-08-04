import Tile from './Tile'
import { drawTile, clearTile } from './canvas'
import { canMoveUp, canMoveDown, canMoveLeft, canMoveRight } from './GameHelpers'

export default class Game {
    constructor(){
        this.board = this.initBoard()
        this.score = 0
    }

    initBoard = () => {
        let board = []
        for (let i = 0; i < 4; i++){
            board[i] = []
            for (let j = 0; j < 4; j++){
                board[i][j] = 0
            }
        }
        return board
    }

    newTile = () => {
        let tile = new Tile(this.board)
        this.board[tile.pos.x][tile.pos.y] = tile.value
        drawTile(tile.pos.x, tile.pos.y, tile.value)
    }

    start = () => {
        this.newTile()
        this.newTile()
    }

    up = () => { 
        if (!canMoveUp(this.board)){
            return false
        }
        for (let x = 0; x < 4; x++){
            for (let y = 1; y < 4; y++){
                if (this.board[x][y] !== 0){
                    for(let y1 = 0; y1 < y; y1++){
                        if (this.board[x][y1] === 0){
                            this.board[x][y1] = this.board[x][y]
                            drawTile(x, y1, this.board[x][y1])
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        } else if (this.board[x][y] === this.board[x][y1]){
                            this.board[x][y1] += this.board[x][y]
                            drawTile(x, y1, this.board[x][y1])
                            this.score += this.board[x][y1]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
    }

    down = () => {
        if (!canMoveDown(this.board)){
            return false
        }
        console.log('can move down!')
    }

    left = () => {
        if (!canMoveLeft(this.board)){
            return false
        }
        console.log('can move left!')
    }

    right = () => {
        if (!canMoveRight(this.board)){
            return false
        }
        console.log('can move right!')
    }


}