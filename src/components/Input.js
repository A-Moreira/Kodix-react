import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          type="text"
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}
