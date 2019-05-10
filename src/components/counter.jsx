import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 1 };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  render() { 
    return ( 
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

  handleIncrement() {
    console.log("handle");
    this.setState({value : this.state.value + 1});
  }
}
 
export default Counter;