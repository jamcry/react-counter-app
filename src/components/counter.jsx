import React, { Component } from 'react';

class Counter extends Component {
  state = { value: this.props.counter.value };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  render() { 
    return ( 
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
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

  handleIncrement() {
    console.log("handle");
    this.setState({value : this.state.value + 1});
  }
  
  getBadgeClasses() {
    // Return warning(yellow) badge if value is zero, primary(blue) otherwise
    return "badge m-2 badge-" + (this.state.value === 0 ? "warning" : "primary");
  }
}
 
export default Counter;