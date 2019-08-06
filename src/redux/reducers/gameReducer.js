const initialState = {
    board: [],
    score: 0,
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

        case 'CLEAR_SCORES':
            return {
                ...state,
                games: []
            }

        case 'ADD_GAMES':
            return {
                ...state,
                games: [
                    ...state.games,
                    action.payload
                ],
            }

        default:
            return state
    }
}