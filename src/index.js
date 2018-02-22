import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import Navigation from './containers/Navigation';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Navigation>
            <App />
        </Navigation>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
