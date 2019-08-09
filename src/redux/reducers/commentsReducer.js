const initialState = {
  name: '',
  content: '',
  all: []
}

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SET_CONTENT':
      return {
        ...state,
        content: action.payload
      }

    case 'ADD_COMMENT':
      return {
        ...state,
        all: [...state.all,
        action.payload]
      }

    case 'CLEAR_COMMENTS':
      return {
        ...state,
        all: []
      }
    
    default:
      return state
  }
}