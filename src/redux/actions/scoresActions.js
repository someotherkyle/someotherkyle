export const clearHighScores = () => {
    return {
        type: 'CLEAR_SCORES'
    }
}

export const fetchScores = () => dispatch =>  {
    return fetch("http://localhost:3001/games")
    .then(r => r.json())
    .then(games => 
        games.map(game => 
            dispatch({type: 'ADD_GAMES', payload: game}))
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