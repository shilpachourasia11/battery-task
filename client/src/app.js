import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home';
import reducers from './reducers';

import '../style/style.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)


ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component= {Home} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
