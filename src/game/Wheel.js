import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import classNames from 'classnames';

import './Wheel.scss';

export default class extends Component {
  state = { hovering: false, dragging: false, degrees: 0 };

  hoverHandle = e => {
    if (!this.state.hovering) {
      this.setState({ hovering: true });
    }
  };

  exitHandle = e => {
    this.setState({ hovering: false });
  };

  beginDrag = e => {
    this.addListeners();
    this.setState({ dragging: true });
  };

  endDrag = e => {
    const { setWheel } = this.props;
    setWheel && setWheel(this.state.degrees);

    this.removeListeners();
    this.setState({ dragging: false });
  };

  rotate = throttle(e => {
    const wheel = this.getCenter();
    const mouse = this.getMouse(e);

    const angle = Math.atan2(wheel.y - mouse.y, wheel.x - mouse.x);

    let degrees = angle * 180 / Math.PI - 90;
    if (degrees < 0) degrees += 360;
    degrees = degrees.toFixed(0);

    this.setState({ degrees });
  }, 10);

  getMouse(e) {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  getCenter() {
    const { wheel } = this.refs;
    const rect = wheel.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
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
    const { hit } = this.props;
    const { hovering, dragging, degrees } = this.state;

    const onDrag = dragging ? undefined : this.beginDrag;
    const onHandlerHover = dragging ? undefined : this.hoverHandle;

    const className = classNames('wheel__wrapper', {
      'wheel__wrapper--hovering': hovering,
      'wheel__wrapper--dragging': dragging,
      'wheel__wrapper--hit': hit
    });

    const transform = `rotate(${degrees}deg)`;

    return (
      <div className={className}>
        <div ref={'wheel'} className="wheel__body" style={{ transform }}>
          <div className="wheel__face" />
          <div
            className="wheel__handle"
            onMouseDown={onDrag}
            onMouseOver={onHandlerHover}
            onMouseOut={this.exitHandle}
          />
        </div>
        <div className="wheel__label">{degrees}</div>
      </div>
    );
  }
}
