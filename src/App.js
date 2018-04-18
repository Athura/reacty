import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: 'Joshua', age: 22 },
        { name: 'Molly', age: 23 },
        { name: 'Micah', age: 20 }
      ],
      showPersons: false
    }
  }

  _switchNameHandler = ( newName ) => {
    //console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Molly', age: 26 },
        { name: 'Micah', age: 20 }
      ]
    });
  }

  _nameChangedHandle = (event) => {
    this.setState({
      persons: [
        { name: 'Josh', age: 22 },
        { name: event.target.value, age: 25 },
        { name: 'Micah', age: 20 }
      ]
    });
  }

  _togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Hi, I'm a fruitloop!</h1>
          <button onClick={ this._togglePersonsHandler } style={ style }>Toggle persons</button>
          { 
            this.state.showPersons === true ? 
            <div>
              <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } click={this._switchNameHandler.bind(this, 'Molly!')} />
              <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } changeName={ this._nameChangedHandle } />
              <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
            </div> : null
          }
        </p>
      </div>
    );
  }
}

export default App;
