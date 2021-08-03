import React, { Component } from 'react';
import Village from '../../containers/Village';
import VillagerDetailList from '../../containers/VillagerDetailList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (

      <Router>

        <Switch>
          <Route path="/" exact={true}
            component={Village}
          />

          <Route path="/:_id" exact={true}
            component={VillagerDetailList}
          />

        </Switch>

      </Router>
    );
  }
}
