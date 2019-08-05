import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import game from './reducers/gamesReducer'

const rootReducer = combineReducers({
  game
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))