import React, { Component } from "react";

class ClickCounterTwo extends Component {
  /* constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }; */
  render() {
    return (
      <>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} times
        </button>
      </>
    );
  }
}

export default ClickCounterTwo;
