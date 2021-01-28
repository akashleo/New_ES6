
import './App.css';
import UserOutput from './UserOutput/userOutput';
import React, {Component} from 'react';

class App extends Component {
  state ={
    "name" : "Zarin",
    "work": "Klarna"
  };

  stateChangeHandlerOne = (event) => {
    this.setState({"name": event.target.value })
  };

  stateChangeHandlerTwo = (event) => {
    this.setState({"work": event.target.value })
  };


 render(){
  return (
    <div className="App">
      <UserOutput name={this.state.name} 
        work={this.state.work}  
        nameChanged={this.stateChangeHandlerOne} 
        workChanged={this.stateChangeHandlerTwo}
        nameField={this.state.name}
        workField={this.state.work}
        stringLength={this.state.name.length}/>
    </div>
  )
 };
}

export default App;
