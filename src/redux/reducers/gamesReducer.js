const initialState = {
    board: [],
    score: 0,
    loading: false,
    games: []
}
export default function gameReducer(state = initialState, action){
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
            console.log('start score fetch in reducer')
            return { 
                ...state, 
                loading: true 
            }

        case 'ADD_GAME':
            console.log(action)
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