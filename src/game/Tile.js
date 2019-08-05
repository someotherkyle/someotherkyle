export default class Tile {
    constructor(boardState){
        this.pos = this.initializePos(boardState)
        this.value = this.initializeValue()
    }

    initializePos = board => {
        let newPos = {}
        do {
            newPos.x = parseInt(Math.random() * Math.floor(4))
            newPos.y = parseInt(Math.random() * Math.floor(4))
        } while (board[newPos.x][newPos.y] !== 0)
        return newPos
    }

    initializeValue = () => {
        let value = Math.random()
        value > 0.9 ? value = 4 : value = 2
        return value
    }
}