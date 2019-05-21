import React from "react";
import Color from "./Color";

export default class Colors extends React.Component {
  render() {
    return (
      <div className="colors-container">
        <span className="colors-title">Цвет</span>
        <ul className="colors">
          <Color
            value={"white"}
            id={"white"}
            for={"white"}
            className={"label color-white"}
            handleChange={this.props.handleChange}
          />
          <Color
            value={"black"}
            id={"black"}
            for={"black"}
            className={"label color-black"}
            handleChange={this.props.handleChange}
          />
          <Color
            value={"grey"}
            id={"grey"}
            for={"grey"}
            className={"label color-grey"}
            handleChange={this.props.handleChange}
          />
          <Color
            value={"red"}
            id={"red"}
            for={"red"}
            className={"label color-red"}
            handleChange={this.props.handleChange}
          />
          <Color
            value={"green"}
            id={"green"}
            for={"green"}
            className={"label color-green"}
            handleChange={this.props.handleChange}
          />
        </ul>
      </div>
    );
  }
}
