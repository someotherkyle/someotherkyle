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

export const changePlayState = () => {
  return {
    type: 'CHANGE_PLAYSTATE'
  }
}

export const toggleListener = () => {
  return {
    type: 'TOGGLE_LISTENER'
  }
}

export const updateName = name => {
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}

export const updateScore = score => {
    return {
        type: 'UPDATE_SCORE',
        payload: score
    }
}
