import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <>
        <div>
          <p>Count : {this.state.count}</p>
          <button onClick={() => this.incrementByFive()}>Increment</button>
        </div>
      </>
    );
  }
}

export default Count;
