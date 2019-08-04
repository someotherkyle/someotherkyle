import Tile from './Tile'
import { drawTile, clearTile } from './canvas'
import { canMoveUp, canMoveDown, canMoveLeft, canMoveRight, clearShotVert, clearShotHoriz } from './GameHelpers'

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
                        } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y1, y, this.board)){
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
        this.newTile()
    }

    down = () => {
        if (!canMoveDown(this.board)){
            return false
        }
        for (let x = 0; x < 4; x++){
            for (let y = 2; y >= 0; y--){
                if (this.board[x][y] !== 0){
                    for(let y1 = 3; y1 > y; y1--){
                        if (this.board[x][y1] === 0){
                            this.board[x][y1] = this.board[x][y]
                            drawTile(x, y1, this.board[x][y1])
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y, y1, this.board)){
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
        this.newTile()
    }

    left = () => {
        if (!canMoveLeft(this.board)){
            return false
        }
        for (let y = 0; y < 4; y++){
            for (let x = 1; x < 4; x++){
                if (this.board[x][y] !== 0){
                    for(let x1 = 0; x1 < x; x1++){
                        if (this.board[x1][y] === 0){
                            this.board[x1][y] = this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x1, x, this.board)){
                            this.board[x1][y] += this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.score += this.board[x1][y]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.newTile()
    }

    right = () => {
        if (!canMoveRight(this.board)){
            return false
        }
        for (let y = 0; y < 4; y++){
            for (let x = 2; x >= 0; x--){
                if (this.board[x][y] !== 0){
                    for(let x1 = 3; x1 > x; x1--){
                        if (this.board[x1][y] === 0){
                            this.board[x1][y] = this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x, x1, this.board)){
                            this.board[x1][y] += this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.score += this.board[x1][y]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.newTile()
    }
}