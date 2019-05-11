import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters : [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 5},
      {id: 4, value: 2}
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // Clone the state's counters array
    const index = counters.indexOf(counter); // Get the index of the clicked counter
    counters[index] = { ...counter }; // Clone the clicked counter object
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // Filter the counters that will not be deleted
    const counters = this.state.counters.filter(counter => (counter.id !== counterId));
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
