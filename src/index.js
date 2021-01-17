import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash.throttle';

// Local imports
import App from './App';
import rootReducer from './redux/reducers';
import { initialState } from './redux/reducers/citiesReducer';
import { loadState, saveState } from './helpers';
import reportWebVitals from './reportWebVitals';

// Assets
import './index.css';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      app: {
        ...initialState,
        cities: [...store.getState().app.cities],
      },
    });
  }, 1000)
);

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
