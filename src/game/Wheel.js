import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import classNames from 'classnames';

import './Wheel.scss';

export default class extends Component {
  state = { dragging: false, degrees: 0 };

  beginDrag = e => {
    this.addListeners();
    this.setState({ dragging: true });
  };

  endDrag = e => {
    this.removeListeners();
    this.setState({ dragging: false });
  };

  rotate = throttle(e => {
    const wheel = this.getCenter();
    const mouse = this.getMouse(e);
    
    const angle = Math.atan2(
      mouse.y - wheel.y,
      mouse.x - wheel.x
    );

    let degrees = angle * 180 / Math.PI - 90;
    if (degrees < 0) degrees += 360;

    this.setState({ degrees });
  }, 10);

  getMouse(e) {
    return {
      x: e.clientX,
      y: e.clientY
    }
  };

  getCenter() {
    const { wheel } = this.refs;
    const rect = wheel.getBoundingClientRect();

    return {
      x: rect.left + (rect.width / 2),
      y: rect.top + (rect.height / 2)
    };
  }

  addListeners() {
    document.addEventListener('mouseup', this.endDrag);
    document.addEventListener('mousemove', this.rotate);
  }

  removeListeners() {
    document.removeEventListener('mouseup', this.endDrag);
    document.removeEventListener('mousemove', this.rotate);
  }

  componentDidMount() {
    this.getCenter();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  render() {
    const { dragging, degrees } = this.state;

    const onDrag = dragging
      ? undefined
      : this.beginDrag;

    const className = classNames('wheel', {
      'wheel--dragging': dragging
    });

    const transform = `rotate(${degrees}deg)`;

    return (
      <div
        ref={'wheel'}
        className={className}
        style={{transform}}
        onMouseDown={onDrag}>
      </div>
    );
  }
}
