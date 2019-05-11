import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  render() { 
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
        Reset Counters
        </button>
        {this.props.counters.map(counter => (
          <li class="list-group-item list-group-item-secondary">
            <Counter
              counter={counter}
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
            />
          </li>
        ))}
      </div>
    );
  }
}
 
export default Counters;