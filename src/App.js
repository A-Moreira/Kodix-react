import React from "react";
import CarsRequest from "./components/CarsRequest";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo"></div>
        </header>
      <div className="container">
        <CarsRequest />
      </div>
      <footer className="footer"></footer>
    </>

  );
  }
}

export default App;
