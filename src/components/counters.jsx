import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
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
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
        Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;