export default function tilesReducer(state = {
    tiles: [],
}, action){
    switch(action.type){
        case 'NEW_TILE':
            return {
                ...state,
                tiles: [...state.tiles, action.payload]
            }

        default:
            return state
    }
}