import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import game from './reducers/gameReducer'
import scores from './reducers/scoresReducer'
import blog from './reducers/blogReducer'

const rootReducer = combineReducers({
  game,
  scores,
  blog
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))