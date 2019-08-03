import Tile from './Tile'
import { drawTile, clearTile } from './canvas'
import { canMoveUp, canMoveDown, canMoveLeft, canMoveRight, noBlockHoriz, noBlockVert } from './GameHelpers'

export default class Game {
    constructor(){
        this.board = this.initBoard()[0]
        this.conflict = this.initBoard()[1]
        this.score = 0
    }

    initBoard = () => {
        let board = []
        let conflict = []
        for (let i = 0; i < 4; i++){
            board[i] = []
            conflict[i] = []
            for (let j = 0; j < 4; j++){
                board[i][j] = 0
                conflict[i][j] = 0
            }
        }
        return [board, conflict]
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

    up = () => {            //up is currently shifting right.
        if (!canMoveUp(this.board)){
            return false
        }
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if (this.board[i][j] !== 0){
                    for (let k = 0; k < i; k++){
                       if (this.board[k][j] === 0 && noBlockVert(j, k, i, this.board)){
                           this.board[k][j] = this.board[i][j]
                           drawTile(k, j, this.board[k][j])
                           this.board[i][j] = 0
                           clearTile(i, j)
                           break
                       } else if (this.board[k][j] === this.board[i][j] && noBlockVert(j, k, i, this.board) && !this.conflict[k][j]){
                            this.board[k][j] += this.board[i][j]
                            drawTile(k, j, this.board[k][j])
                            this.board[i][j] = 0
                            clearTile(i, j)
                            this.conflict[k][j] = true
                            this.score = this.score + this.board[k][j]
                        
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