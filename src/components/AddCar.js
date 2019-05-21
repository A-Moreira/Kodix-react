import React from "react";
import Input from "./Input";
import Colors from "./Colors";
import SelectStatus from "./SelectStatus";

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      year: null,
      price: null,
      description: null,
      color: null,
      status: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange = e => {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSelect = e => {
    console.log(e);
    const value = e.value;
    this.setState({
      status: value
    });
  };

  handleClick = () => {
    this.props.addNewCar(this.state);
    console.log(this.props);
  };

  render() {
    return (
      <div className="inputs-container">
        <div className="inputs-row">
          <Input
            placeholder={"Имя (обязательное поле)"}
            id={"title"}
            name={"title"}
            className={"add-car-input"}
            handleChange={this.handleChange}
          />
          <Input
            placeholder={"Год (обязательное поле)"}
            id={"year"}
            name={"year"}
            className={"add-car-input"}
            handleChange={this.handleChange}
          />
          <Input
            placeholder={"Цена (обязательное поле)"}
            id={"price"}
            name={"price"}
            className={"add-car-input"}
            handleChange={this.handleChange}
          />
        </div>
        <Input
          placeholder={"Описание"}
          id={"description"}
          name={"description"}
          className={"add-car-input add-car-description"}
          handleChange={this.handleChange}
        />
        <div className="control-row">
          <Colors handleChange={this.handleChange} />
          <SelectStatus handleSelect={this.handleSelect} value={this.value} />
          <button className="send-btn" onClick={this.handleClick}>
            Отправить <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default AddCar;
