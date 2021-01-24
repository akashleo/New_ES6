
import './App.css';
import UserInput from './UserInput/userInput';
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
      <UserInput changed={this.stateChangeHandlerOne} field={this.state.name}/>
      <UserInput changed={this.stateChangeHandlerTwo} field={this.state.work}/>
      <UserOutput name={this.state.name} work={this.state.work}/>
      <UserOutput name="Ritwik" work="IHM"/>
      <UserOutput name="Kuntal" work="Faasos"/>
    </div>
  )
 };
}

export default App;
