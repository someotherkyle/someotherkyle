import { combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import game from './reducers/gamesReducer'

const rootReducer = combineReducers({
  game
})

export default createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
