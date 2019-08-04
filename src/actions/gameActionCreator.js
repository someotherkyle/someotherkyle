export function updateBoard(board){
    return {
        type: 'UPDATE_BOARD',
        payload: board
    }
}

export function updateScore(score){
    return {
        type: 'UPDATE_SCORE',
        payload: score
    }
}