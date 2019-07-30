import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// huh -> ?  import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import manageTiles from './reducers/manageTiles'

let store = createStore(manageTiles, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


//serviceWorker.unregister()
// ^ ? 