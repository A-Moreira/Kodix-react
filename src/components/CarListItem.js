import React from "react";
import Circle from "./Circle";
import Status from "./Status";

class CarListItem extends React.Component {
  render() {
    return(
      <li className="car-item">
        <div className="row-title">
          <span className="cell-title">{this.props.title}</span>
          <Circle color={this.props.color} />
          <span>{this.props.price} руб.</span>
        </div>
        <div className="row-description">
          <span className="cell-description">{this.props.description}</span>
        </div>
        <div className="row-control">
          <div className="row-control-status">
            <span>{this.props.year}</span>
            <span><Status status={this.props.status} /></span>
          </div>
          <button className="btn-delete" onClick={this.props.deleteRow}>
            Удалить
          </button>
        </div>
      </li>
    );
  }
}

export default CarListItem;