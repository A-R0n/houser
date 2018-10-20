import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import Routes from './routes.js';
import Wizard from './Component/Wizard/Wizard';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import store from './store.js';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title={"houser"}/>
              <Switch className="App">
                <Route exact path="/" component={Dashboard} />
                <Route path="/wizard" component={Wizard} />
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
