const initialState = {
  ongoing: false,
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  score: 0,
  listenerAttached: false,
  playerName: 'name?'
}
export default function gameReducer(state = initialState, action){
  switch(action.type){
    case 'UPDATE_BOARD':
      return {
        ...state,
        board: action.payload
    }

    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload
      }

    case 'CHANGE_PLAYSTATE':
      return {
        ...state,
        ongoing: !state.ongoing
      }

    case 'TOGGLE_LISTENER':
      return {
        ...state,
        listenerAttached: !state.listenerAttached
      }
    
    case 'UPDATE_NAME':
      return {
        ...state,
        playerName: action.payload
      }
    default:
     return state
    }
}