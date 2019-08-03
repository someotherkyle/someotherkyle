export default class Tile {
    constructor(boardState){
        this.pos = this.initializePos(boardState)
        this.value = this.initializeValue()
    }

    

    initializePos = board => {
        let newPos = []
        do {
            newPos[0] = parseInt(Math.random() * Math.floor(4))
            newPos[1] = parseInt(Math.random() * Math.floor(4))
        } while (board[newPos[0]][newPos[1] !== 0])
        return newPos
    }

    initializeValue = () => {
        let value = Math.random()
        value > 0.9 ? value = 4 : value = 2
        return value
    }
}