export const clearHighScores = () => {
    return {
        type: 'CLEAR_SCORES'
    }
}

export const fetchScores = () => dispatch =>  {
  return fetch("http://localhost:3001/games")
  .then(r => r.json())
  .then(games => 
    dispatch({
      type: 'ADD_GAMES', 
      payload: games
    })
  )
}

export const pushScore = game => {
  return dispatch => {
    fetch('http://localhost:3001/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game: {
          player_name: game.playerName,
          score: game.score,
        }
      })
    })
    .then(r => {return r.json()})
  }
}