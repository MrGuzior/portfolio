import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './Components/App/App'
import registerServiceWorker from './service/registerServiceWorker'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
