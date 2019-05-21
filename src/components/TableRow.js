import React from "react";
import Circle from "./Circle";
import Status from "./Status";

class TableRow extends React.Component {
  render() {
    return (
      <tr className="table-row">
        <td className="cell">
          <span className="cell-title">{this.props.title}</span>
          <span className="cell-description">{this.props.description}</span>
        </td>
        <td className="cell">{this.props.year}</td>
        <td className="cell">
          <Circle color={this.props.color} />
        </td>
        <td className="cell">
          <Status status={this.props.status} />
        </td>
        <td className="cell cell-price">{this.props.price} руб.</td>
        <td className="cell">
          <button className="btn-delete" onClick={this.props.deleteRow}>
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
