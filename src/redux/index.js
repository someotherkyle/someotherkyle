import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import game from './reducers/gameReducer'
import scores from './reducers/scoresReducer'
import comment from './reducers/commentsReducer'

const rootReducer = combineReducers({
  game,
  scores,
  comment
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))