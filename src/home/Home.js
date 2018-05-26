import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

import Wheel from './../game/Wheel';

export default class extends Component {
  render() {


    return (
      <div className="home">
        <Wheel />
      </div>
    );
  }
}
