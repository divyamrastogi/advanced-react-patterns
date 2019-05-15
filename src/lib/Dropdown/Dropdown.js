import React, { Component } from 'react';

export default class Dropdown extends Component {
  state = {
    show: false
  };

  toggle = () => {
    const { onToggle = () => {} } = this.props;
    this.setState(
      ({ show }) => {
        return {
          show: !show
        };
      },
      () => onToggle(this.state.show)
    );
  };

  render() {
    const { label = 'Show', children } = this.props;
    const { show } = this.state;
    return (
      <div className="dropdown">
        <label onClick={this.toggle}>{label}</label>
        {show ? <div className="content">{children}</div> : null}
      </div>
    );
  }
}
