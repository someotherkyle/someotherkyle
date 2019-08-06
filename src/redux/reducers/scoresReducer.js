const initialState = {
    games: []
}

export default function scoresReducer(state = initialState, action){
  switch (action.type){

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