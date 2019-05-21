import React from "react";
import CarListItem from "./CarListItem";

class CarList extends React.Component {
  render() {
    const cars = this.props.data.map((car, index) => {
      return (
        <CarListItem
          key={index}
          {...car}
          deleteRow={() => {
            this.props.deleteRow(index);
          }}
        />
      );
    });

    return (
      <div className="mobile-block">{cars}</div>
    )
  }
}

export default CarList;