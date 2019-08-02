import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// huh -> ?  import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tilesReducer from './reducers/tilesReducer'

const reducers = combineReducers({
    tiles: tilesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
    reducers, 
    composeEnhancer(applyMiddleware())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


//serviceWorker.unregister()
// ^ ? 