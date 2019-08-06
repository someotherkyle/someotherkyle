export const updateBoard = board => {
    return {
        type: 'UPDATE_BOARD',
        payload: board
    }
}

export const newGame = board => {
    return {
        type: 'UPDATE_BOARD',
        payload: board
    }
}

export const updateScore = score => {
    return {
        type: 'UPDATE_SCORE',
        payload: score
    }
}
