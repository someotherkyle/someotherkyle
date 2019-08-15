const initialState = {
  name: '',
  content: '',
  all: [],
  currentActivity: '',
  error: ''
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

    case 'FETCHING_COMMENTS':
      return {
        ...state,
        currentActivity: 'fetching comments'
      }

    case 'SOURCE_COMMENTS':
      return {
        ...state,
        currentActivity: '',
        all: action.payload
      }

    case 'PUSH_COMMENT':
      return {
        ...state,
        all: [...state.all, action.payload],
        currentActivity: 'adding comment to DataBase'
      }

    case 'CLEAR_ACTIVITY':
      return {
        ...state,
        currentActivity: ''
      }
    
    case 'ERROR':
      return {
        ...state,
        error: 'Something went wrong while'
      }

    default:
      return state
  }
}