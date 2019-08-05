export const updateBoard = board => {
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

/* export function pushScore(score){
    return (dispatch) => {
        dispatch({type: 'START_SCORE_PUSH'})
        return push('localhost:3000/game')
    }
} */