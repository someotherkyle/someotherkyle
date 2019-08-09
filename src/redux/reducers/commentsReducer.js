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

    case 'ADD_COMMENTS':
      return {
        ...state,
        all: action.payload
      }

    default:
      return state
  }
}