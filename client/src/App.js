import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import React, { Component } from 'react';




class App extends Component {


render(){
  return (
    <Provider store={store}>
      <div className="App">
     // TO DO
    </div>
     </Provider> 
  ); 
}
}

export default App;


