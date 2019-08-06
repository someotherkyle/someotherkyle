export const updateBoard = board => {
  return {
    type: 'UPDATE_BOARD',
    payload: board
  }
}

export const setName = name => {
  return {
    type: 'SET_NAME',
    payload: name
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
