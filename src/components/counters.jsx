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

  handleDelete = (counterId) => {
    // Filter the counters that will not be deleted
    const counters = this.state.counters.filter(counter => (counter.id !== counterId));
    this.setState({ counters });
  };

  render() { 
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;