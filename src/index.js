import React from 'react';
import ReactDOM from 'react-dom';
import store from './ReduxStore';
import { Provider } from 'react-redux';
import App from './Components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)