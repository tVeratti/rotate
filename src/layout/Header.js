import React, { Component } from 'react';

import './Header.scss';

export default class extends Component {
  render() {
    return (
      <header className="header">
        {/* Skip Links */}
        <ul id="skiplinks">
          <li>
            <a href="#content">To Content</a>
          </li>
          <li>
            <a href="#navigation">To Navigation</a>
          </li>
        </ul>

        <div className="header__image" aria-hidden="true" />
        <h1 className="header__name">Rotate</h1>
      </header>
    );
  }
}
