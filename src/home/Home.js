import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.scss';

import Wheel from './../game/Wheel';
import Target from './../game/Target';

import actions from './../game/Actions';

class Home extends Component {
  setWheel = degrees => {
    const { dispatch } = this.props;
    dispatch(actions.setWheel(degrees));
  };

  componentDidUpdate() {
    const { hit, dispatch } = this.props;
    if (hit) {
      setTimeout(() => dispatch(actions.setTarget()), 1000);
    }
  }

  render() {
    const { target, wheel, hit, tolerance } = this.props;
    return (
      <div className="home">
        <Wheel setWheel={this.setWheel} hit={hit} />
        <div>Target: {target}</div>
        <div>Tolerance: +/-{tolerance}</div>
      </div>
    );
  }
}

export default connect(state => state.game)(Home);
