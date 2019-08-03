export function canMoveUp(board){
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            if (board[i][j] !== 0) {
                if (board[(i + 1)][j] === 0 || board[(i + 1)][j] === board[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

export function canMoveDown(board){
    for (let i = 2; i > -1; i--){
        for (let j = 0; j < 4; j++){
            if (board[i][j] !== 0) {
                if (board[(i + 1)][j] === 0 || board[(i + 1)][j] === board[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

export function canMoveRight(board){
    for (let i = 0; i < 4; i++){
        for (let j = 2; j > -1; j--){
            if (board[i][j] !== 0) {
                if (board[i][(j + 1)] === 0 || board[1][(j + 1)] === board[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

export function canMoveLeft(board){
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            if (board[i][j] !== 0) {
                if (board[i][(j - 1)] === 0 || board[i][(j - 1)] === board[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

export function noBlockVert(col, row1, row2, board){
    for (let i = row1 + 1; i < row2; i++){
        if (board[i][col] !== 0){
            return false
        }
    }
    return true
}

export function noBlockHoriz(row, col1, col2, board){
    for (let i = col1 + 1; i < col2; i++){
        if (board[row][i] !== 0){
            return false
        }
    }
    return true
}