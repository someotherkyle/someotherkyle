import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import scores from './reducers/scoresReducer'
import blog from './reducers/blogReducer'

const rootReducer = combineReducers({
  scores,
  blog
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))