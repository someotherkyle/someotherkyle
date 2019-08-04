export default function gameReducer(state = {
    board: [],
    score: 0
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

        default:
            return state
    }
}