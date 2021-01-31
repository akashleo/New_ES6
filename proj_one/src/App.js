import "./App.css";
import UserOutput from "./UserOutput/userOutput";
import UserInput from "./UserInput/userInput";
import Char from "./Char/Char";

import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Zarin", work: "Klarna" },
      { id: "465", name: "Akash", work: "Amazon" },
      { id: "789", name: "Sayan", work: "SwedBank" },
    ],
    characterList: "",
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const modifiedPerson = { ...this.state.persons[personIndex] };

    modifiedPerson.name = event.target.value;

    const personsArray = [...this.state.persons];
    personsArray[personIndex] = modifiedPerson;

    this.setState({ persons: personsArray });
  };

  workChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const modifiedPerson = { ...this.state.persons[personIndex] };

    modifiedPerson.work = event.target.value;

    const personsArray = [...this.state.persons];
    personsArray[personIndex] = modifiedPerson;

    this.setState({ persons: personsArray });
  };

  inputChangedHandler = (event) => {
    const characterListM = event.target.value;

    this.setState({ characterList: characterListM });
  };

  render() {
    let persons = this.state.persons;

    const charList = this.state.characterList.split("").map((ch) => {
      return <Char character={ch} />;
    });

    const userOutput = persons.map((person) => {
      return (
        <UserOutput
          name={person.name}
          work={person.work}
          nameChanged={(event) => {
            this.nameChangedHandler(event, person.id);
          }}
          workChanged={(event) => {
            this.workChangedHandler(event, person.id);
          }}
          stringLength={person.name.length}
        />
      );
    });
    //
    return (
      <div className="App">
        {userOutput}
        <br />
        <UserInput
          field={this.state.characterList}
          changed={this.inputChangedHandler}
        />
        <br />
        {charList}
      </div>
    );
  }
}

export default App;
