import React from "react";

const Circle = ({ color }) => {
  const style = {
    width: "20px",
    height: "20px",
    background: color,
    border: "1px solid transparent",
    borderRadius: "50%"
  };

  if (style.background === "white") {
    style.border = "1px solid gray";
  }

  return <div style={style} />;
};

export default Circle;