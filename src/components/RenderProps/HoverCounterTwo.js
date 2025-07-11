import React, { Component } from "react";

class HoverCounterTwo extends Component {
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
        <h1 onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </h1>
      </>
    );
  }
}

export default HoverCounterTwo;
