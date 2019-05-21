import React from "react";

export default class Color extends React.Component {
  render() {
    return (
      <li className="color">
        <input
          type="radio"
          className="radio-btn"
          name="color"
          value={this.props.value}
          id={this.props.id}
          onChange={this.props.handleChange}
        />
        <label htmlFor={this.props.for} className={this.props.className} />
      </li>
    );
  }
}