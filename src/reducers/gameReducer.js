export default function gameReducer(state = {
    board: [],
    score: 0,
    loading: false,
    games: []
}, action){
    switch(action.type){
        case 'UPDATE_BOARD':
            return {
                ...state,
                board: [action.payload]
            }

        case 'UPDATE_SCORE':
            return {
                ...state,
                score: [action.payload]
            }

        case 'START_SCORE_FETCH':
            return { 
                ...state, 
                loading: true 
            }

        case 'ADD_GAME':
            return {
                ...state,
                games: [
                    ...state.games,
                    action.game
                ],
                loading: false
            }

        default:
            return state
    }
}