import React from "react";
import Select from "react-select";

const options = [
  { value: "in_stock", label: "В наличии" },
  { value: "pednding", label: "Ожидается" },
  { value: "out_of_stock", label: "Нет в наличии" }
];

const customStyles = {
  indicatorSeparator: () => ({}),
  control: (provided) => {
    return {
      ...provided,
      // borderRadius: 0,
      borderColor: "#dcdcdc",
      // borderWidth: 1,
      borderBottomWidth: 2,
      borderBottomStyle: "solid",
      borderBottomColor: "#dcdcdc",
      boxShadow: null,
      "&:hover": {
        borderBottomColor: "#c4092f"
      },
      "&:focus": {
        borderBottomColor: "#000"
      }
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isFocused ? "black" : "#cbcbcc",
      backgroundColor: "white"
    }
  },
  menuList: (provided, state) => {
    return {
      ...provided,
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};

const theme = (theme) => {
  return {
    ...theme,
    borderRadius: 0,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    boxShadow: null,
    spacing: {
      ...theme.spacing,
      menuGutter: 0
    }
  }
}

const SelectStatus = props => (
  <Select options={options} value={props.value} onChange={props.handleSelect} styles={customStyles} />
);

export default SelectStatus;
