import React, { Component } from 'react';
import './App.css';
import AddReminder from "./components/AddReminder";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddReminder/>
      </div>
    );
  }
}

export default App;
