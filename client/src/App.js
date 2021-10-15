import React, { Component } from 'react'; //different
import logo from './logo.svg';
import './App.css';

class App extends Component { //different
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() { //different
    return(// The rest of the file is the same
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>hellooo</p>
        <p>
            {this.state.apiResponse}
        </p>
      </div>
    );
  }
}

export default App;
