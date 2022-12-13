import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { json } from "express";
// import { render } from '../../api/app';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", data: "" };
  }

//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.text())
//       .then((data) => console.log(data))
//       .then((res) => this.setState({ apiResponse: res }));
//   }

  callAPI2() {
	  fetch("http://localhost:3333/api")
		  .then((res) => res.json())
      		.then((data) => this.setState({ data:data }));
    //   .then((data3333) => console.log(data3333))
  }

  componentWillMount() {
    // this.callAPI();
    this.callAPI2();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
					Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					>
					Learn React
					</a> */}
          <div className="9000">
            <h3>9000</h3>
            {/* <p className="9000_text">{this.state.apiResponse}</p> */}
          </div>
          <div className="3333">
            <h3>3333</h3>
            <p className="3333_text">{this.state.data}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
