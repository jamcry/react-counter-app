import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    return ( 
      <div>
        <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
        Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
        Delete
        </button>
      </div>
    );
  }
  
  getBadgeClasses() {
    // Return warning(yellow) badge if value is zero, primary(blue) otherwise
    return "badge m-2 badge-" + (this.props.value === 0 ? "warning" : "primary");
  }
}
 
export default Counter;