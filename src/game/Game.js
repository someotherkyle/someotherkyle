import { drawTile, clearTile } from './canvas'
import { canMoveUp, canMoveDown, canMoveLeft, canMoveRight, clearShotVert, clearShotHoriz } from './GameHelpers'

export default class Game {
    constructor(){
        this.board = this.initBoard()
        this.score = 0
        this.eligible = this.resetEligibility()
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

    resetEligibility = () => {
        let eligible = []
        for (let i = 0; i < 4; i++){
            eligible[i] = []
            for (let j = 0; j < 4; j++){
                eligible[i][j] = true
            }
        }
        return eligible
    }

    newTile = () => {
        let pos = this.newTileCoords()
        let val = this.newTileVal()
        this.board[pos.x][pos.y] = val
        drawTile(pos.x, pos.y, val)
    }

    newTileCoords = () => {
        let newCoords = {}
        do {
            newCoords.x = parseInt(Math.random() * 4)
            newCoords.y = parseInt(Math.random() * 4)
        } while (this.board[newCoords.x][newCoords.y] !== 0)
        return newCoords
    }

    newTileVal = () => {
        let val = Math.random()
        val >= 9 ? val = 4 : val = 2
        return val
    }

    start = () => {
        this.newTile()
        this.newTile()
    }

    end = () => {
        document.getElementById('gameover-canvas').style.display = 'inline'
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
                        } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y1, y, this.board) && this.eligible[x][y1]){
                            this.board[x][y1] += this.board[x][y]
                            drawTile(x, y1, this.board[x][y1])
                            this.eligible[x][y1] = false
                            this.score += this.board[x][y1]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.eligible = this.resetEligibility()
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
                        } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y, y1, this.board) && this.eligible[x][y1]){
                            this.board[x][y1] += this.board[x][y]
                            drawTile(x, y1, this.board[x][y1])
                            this.eligible[x][y1] = false
                            this.score += this.board[x][y1]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.eligible = this.resetEligibility()
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
                        } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x1, x, this.board) && this.eligible[x1][y]){
                            this.board[x1][y] += this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.eligible[x1][y] = false
                            this.score += this.board[x1][y]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.eligible = this.resetEligibility()
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
                        } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x, x1, this.board) && this.eligible[x1][y]){
                            this.board[x1][y] += this.board[x][y]
                            drawTile(x1, y, this.board[x1][y])
                            this.eligible[x1][y] = false
                            this.score += this.board[x1][y]
                            this.board[x][y] = 0
                            clearTile(x, y)
                            break
                        }
                    }
                }
            }
        }
        this.eligible = this.resetEligibility()
        this.newTile()
    }
}