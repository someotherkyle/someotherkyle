import Tile from './Tile'
import { draw } from './canvas'

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
        draw(tile)
    }

    start = () => {
        this.newTile()
        this.newTile()
    }

    up = () => {

    }
    down = () => {

    }

    left = () => {

    }

    right = () => {

    }


}