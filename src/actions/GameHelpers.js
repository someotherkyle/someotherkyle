export const canMoveUp = board => {
    for (let x = 0; x < 4; x++){
        for (let y = 1; y < 4; y++){
            if (board[x][y] !== 0) {
                if (board[x][y - 1] === 0 || board[x][y] === board[x][y - 1]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveDown = board => {
    for (let x = 0; x < 4; x++){
        for (let y = 2; y >= 0; y--){
            if (board[x][y] !== 0) {
                if (board[x][y + 1] === 0 || board[x][y] === board[x][y + 1]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveLeft = board => {
    for (let y = 0; y < 4; y++){
        for (let x = 1; x < 4; x++){
            if (board[x][y] !== 0) {
                if (board[x - 1][y] === 0 || board[x][y] === board[x - 1][y]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveRight = board => {
    for (let y = 0; y < 4; y++){
        for (let x = 2; x >= 0; x--){
            if (board[x][y] !== 0) {
                if (board[x + 1][y] === 0 || board[x][y] === board[x + 1][y]){
                    return true
                }
            }
        }
    }
    return false
}

export function noBlockVert(col, row1, row2, board){
    for (let x = row1 + 1; x < row2; x++){
        if (board[x][col] !== 0){
            return false
        }
    }
    return true
}

export function noBlockHoriz(row, col1, col2, board){
    for (let x = col1 + 1; x < col2; x++){
        if (board[row][x] !== 0){
            return false
        }
    }
    return true
}