import React from "react";
import axios from "axios";
import AddCar from "./AddCar";
import Table from "./Table";
import CarList from "./CarList";

export default class CarsRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
    this.addNewCar = this.addNewCar.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addNewCar = obj => {
    let arr = this.state.cars;
    if (obj.title && obj.price && obj.color && obj.status) {
      arr.push(obj);
      this.setState({ cars: arr });
    } else {
      alert("Пожалуйста, заполните все обязательные поля");
    }
  };

  deleteRow = index => {
    let arr = this.state.cars;
    console.log(arr);
    arr.splice(index, 1);
    this.setState({ cars: arr });
  };

  componentDidMount() {
    axios
      .get(
        "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json"
      )
      .then(response => {
        this.setState({
          cars: response.data
        });
      });
  }

  render() {
    const isMobileView = document.documentElement.clientWidth < 768;
    let view;

    if (isMobileView) {
      view = <CarList data={this.state.cars} deleteRow={this.deleteRow} />;
    } else {
      view = <Table data={this.state.cars} deleteRow={this.deleteRow} />;
    }
    return (
      <div className="main">
        <h1 className="main-title">¡Ay caramba!</h1>
        <AddCar addNewCar={this.addNewCar} />
        {view}
      </div>
    );
  }
}
