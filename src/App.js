import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  working = () => {
    return (this.state.working === false ? "not working":"working")
  }

  logo = () => {
    return (this.state.working === false ? "App-logo1":"App-logo2")
  }

  handleClick = () => {
    console.log(this.state.working)
    this.setState({ working: !this.state.working });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.logo()} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp />
        <div className="App">
          <button onClick={this.handleClick}>{this.working()}</button>
        </div>
        <Quotes />
      </div>
    );
  }
}

export default App;
