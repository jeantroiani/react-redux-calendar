import React, { Component } from 'react';
import './App.css';
import AddReminder from './components/AddReminder/container';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddReminder/>
      </Provider>
    );
  }
}

export default App;
