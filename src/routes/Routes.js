import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './Routes.scss';

import Home from './../home/Home';

export default class extends Component {
  render() {
    return (
      <main id="content" className="routes">
        <div className="routes__views">
          {/* Routing Main Views */}
          <Route
            render={({ location }) => (
              <CSSTransitionGroup
                transitionName="view"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Switch key={location.key} location={location}>
                  <Route path="/" exact component={Home} />
                </Switch>
              </CSSTransitionGroup>
            )}
          />
        </div>
      </main>
    );
  }
}
