import React, { Component } from 'react';
import './App.css';
import ToDoApp from './containers/ToDoApp';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }


  render() {
    return (
      <div>
        <ToDoApp/>
      </div>
    );
  }
}



export default App;
