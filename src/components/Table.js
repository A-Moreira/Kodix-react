import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  render() {
    const cars = this.props.data.map((car, index) => {
      return (
        <TableRow
          key={index}
          {...car}
          deleteRow={() => {
            this.props.deleteRow(index);
          }}
        />
      );
    });

    return (
      <div className="table-block">
        <h1 className="table-title">Автомобили в наличии</h1>
        <table className="table">
          <thead>
          <tr className="table-head">
            <th className="head-cell">Название</th>
            <th className="head-cell">Год</th>
            <th className="head-cell">Цвет</th>
            <th className="head-cell">Статус</th>
            <th className="head-cell">Цена</th>
            <th className="head-cell" />
          </tr>
          </thead>
          <tbody>{cars}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
