import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// huh -> ?  import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
//will need a reducer here 

let store = createStore(/*reducer*/, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    )


serviceWorker.unregister()
// ^ ? 