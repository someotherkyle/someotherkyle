import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import game from './reducers/gameReducer'
import scores from './reducers/scoresReducer'

const rootReducer = combineReducers({
  game,
  scores
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))