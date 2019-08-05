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

export function fetchScores(){
    console.log('fetch scores func hit in action creator')
    return (dispatch) => {
        dispatch({ type: "START_SCORE_FETCH" })
        return fetch('http://localhost:3001/games')
        .then(r => r.json())
        .then(game => dispatch({ type: 'ADD_GAME', payload: game }))
    }
}

/* export function pushScore(score){
    return (dispatch) => {
        dispatch({type: 'START_SCORE_PUSH'})
        return push('localhost:3000/game')
    }
} */