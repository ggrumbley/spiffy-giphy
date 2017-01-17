import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Login from './containers/Login'
import Favorites from './containers/Favorites'

import './styles/_normalize.css'
import './styles/main.css'

import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="favorites" component={Favorites} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
