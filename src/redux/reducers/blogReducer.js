const initialState = {
  posts: [],
  currentActivity: '',
  error: ''
}

export default function blogReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCHING_POSTS':
      return {
        ...state,
        currentActivity: 'Fetching posts from server'
      }

    case 'SOURCE_POSTS':
      return {
        ...state,
        posts: action.payload,
        currentActivity: ''
      }

    default:
      return state
  }
}