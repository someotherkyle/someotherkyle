const initialState = {
    games: []
}

export default function scoresReducer(state = initialState, action){
  switch (action.type){
    case 'ADD_GAMES':
      return {
        ...state,
        games: action.payload
      }
      
  default:
    return state        
  }
}